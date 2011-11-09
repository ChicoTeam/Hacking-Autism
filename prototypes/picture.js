// Pictures Prototype
var Picture = function(ID) {
	// object properties
	this.ID = null;
	this._keyword = null;
	this._imageData = null;
	
	// load this object's properties from the DB using an ID
	this.load = function(ID) {
		console.log("loading picture: " + ID);
	
		// search database by ID
		var results = lib.query("pictures", {ID: ID});

		if(results.length == 0)
			return false;// picture not found
		
		// copy values into this object
		// TODO: find a way to do this all at once
		this.keyword = results[0].keyword;
		this.imageData = results[0].imageData;
		this.ID = results[0].ID;
	
		return true;
	}
	
	// store this object into the db (insert/update)
	this.save = function() {
		// check database for existing record
		var results = lib.query("pictures", {ID: this.ID});
	
		if(results.length > 0) {
			// update database record...
			console.log("updating...");
			var thisObj = this;
			lib.update("pictures", {ID: this.ID}, function(row) {
				row.keyword = thisObj.keyword;
				row.imageData = thisObj.imageData;

				return row;
			});
			lib.commit();// commit the db operation
			
			return this.ID; // return existing id
		}
		else {
			// insert new database record
			console.log("inserting...");
			var result_id = lib.insert("pictures", this);
			lib.commit();// commit the db operation
		
			this.ID = result_id;
			
			return result_id; // return new record id
		}
	}
	
	// delete this object from the database (using this.ID to query db)
	this.delete = function() {
		console.log("deleting... " + this.ID);
		
		var results = lib.deleteRows("pictures", {ID: this.ID});
		lib.commit();
		
		if(results.length == 0)
			return false;// delete not successful
		
		return true;
	}
	
	// constructor goes here?
	if(typeof(ID) != "undefined") {
		this.load(ID);
	}
}

// define getters and setters for object properties
Page.prototype = {
	get keyword() {
		return this._keyword;
	},
	set keyword(val) {
		this._keyword = val;
	},
	get imageData() {
		return this._imageData;
	},
	set imageData(val) {
		this._imageData = val;
	}
};
