// Page Prototype
var Page = function(ID) {
	// object properties
	this.description = null;
	this.pageOrder = null;

	// load this object's properties from the DB using id
	this.load = function(ID) {
		console.log("loading page: " + ID);
	
		// search database by ID
		var results = lib.query("pages", {ID: ID});
		
		console.log("retrieved from db: ");
		console.log(results);
		
		// TODO: write error handler for "no results" case (return false)
		
		// copy values into this object
		// TODO: find a way to do this all at once
		this.setDescription(results[0].description);
		this.setPageOrder(results[0].pageOrder);
		this.ID = results[0].ID;
	
		return true;
	}

	// store this object into the db
	this.save = function() {
		// check database for existing record
		var results = lib.query("pages", {ID: this.ID});
	
		if(results.length > 0) {
			console.log("updating database record...");
		
			// update database record...
			var thisObj = this;
			lib.update("pages", {ID: this.ID}, function(row) {
				// note "this" takes on a different context within a function, so we must use thisObj
				row = thisObj;

				return row;
			});
			lib.commit();// commit the db operation
		}
		else {
			console.log("inserting new database record...");
		
			// insert new database record
			var resultId = lib.insert("pages", this);
			lib.commit();// commit the db operation
		
			this.ID = resultId;
		}
	
		return resultId; // return new record id
	}

	this.setDescription = function(description) {
		this.description = description;
	}
	
	this.getDescription = function() {
		return this.description;
	}
	
	this.setPageOrder = function(pageOrder) {
		this.pageOrder = pageOrder;
	}
	
	this.getPageOrder = function() {
		return this.pageOrder;
	}
	
	this.addPicture = function(pictureObject) {
		// TODO: implement this method
	
		// add row to pages_pictures table

		return true;
	}

	this.removePicture = function(picture_ID) {
		// TODO: implement this method
	
		return true; // return false if not successful
	}
	
	// constructor goes here?
	if(typeof(ID) != "undefined") {
		this.load(ID);
	}
}
