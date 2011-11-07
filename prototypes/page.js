// Page Prototype
function Page(ID) {
	// object properties
	this.ID = null;
	this._description = null;
	this._pageOrder = null;

	// load this object's properties from the DB using an ID
	this.load = function(ID) {
		console.log("loading page: " + ID);
	
		// search database by ID
		var results = lib.query("pages", {ID: ID});
		
		if(results.length == 0)
			return false;// page not found
		
		// copy values into this object
		// TODO: find a way to do this all at once
		this.description = results[0].description;
		this.pageOrder = results[0].pageOrder;
		this.ID = results[0].ID;
	
		return true;
	}

	// store this object into the db (insert/update)
	this.save = function() {
		// check database for existing record
		var results = lib.query("pages", {ID: this.ID});
	
		if(results.length > 0) {
			console.log("updating...");
		
			// update database record...
			var thisObj = this;
			var result_id = lib.update("pages", {ID: this.ID}, function(row) {
				// note "this" takes on a different context within a function, so we must use thisObj
				row = thisObj;

				return row;
			});
			lib.commit();// commit the db operation
			
			this.ID = result_id;
		}
		else {
			console.log("inserting...");
		
			// insert new database record
			var result_id = lib.insert("pages", this);
			lib.commit();
		
			this.ID = result_id;
		}
	
		return result_id; // return new record id
	}
	
	// delete this object from the database (using this.ID to query db)
	this.delete = function() {
		console.log("deleting... " + this.ID);
		
		var results = lib.deleteRows("pages", {ID: this.ID});
		lib.commit();
		
		if(results.length == 0)
			return false;// nothing deleted

		return true;// success
	}
	
	this.addPicture = function(pic_ID) {
		// get max picture "order"...
		var max = 1;
		var results = lib.query("pages_pictures", {page_ID: this.ID});
		for(var i = 0; i < results.length; i++) {
			if(results[i].order > max)
				max = results[i].order;
		}
		var next_order = max + 1;
	
		// check to see if picture is already on page
		var page_ID = this.ID;
		var results = lib.query("pages_pictures", function(row) {
				if(row.picture_ID == pic_ID && row.page_ID == page_ID) {
				    return true;
				} else {
				    return false;
				}
		});
	
		if(results.length == 0) {
			// insert record
			lib.insert("pages_pictures", {page_ID: this.ID, picture_ID: pic_ID, order: next_order});
			lib.commit();
		}
		else {
			// row already exists!
			return false;
		}

		return true;
	}

	this.removePicture = function(pic_ID) {
		var page_ID = this.ID;
		var results = lib.deleteRows("pages_pictures", function(row) {
				if(row.picture_ID == pic_ID && row.page_ID == page_ID) { 
				    return true;
				} else {
				    return false;
				}
		});
		lib.commit();

		if(results == 0)
			return false;// record was not deleted
			
		return true;// success
	}
	
	// constructor goes here?
	if(typeof(ID) != "undefined") {
		this.load(ID);
	}
}

// define getters and setters for object properties
Page.prototype = {
	get description() {
		return this._description;
	},
	set description(val) {
		this._description = val;
	},
	get pageOrder() {
		return this._pageOrder;
	},
	set pageOrder(val) {
		this._pageOrder = val;
	}
};
