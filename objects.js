/*		
	These prototypes are meant to be instantiated as objects. 
	They are Data Access Objects that will interact with the application database.
	
	Example usage (with jQuery):
	var myPage = new Page();
 	$(“addPictureButton”).click(function(){
		var myPicture = new Picture();
		myPicture.setImageData(dialogBox());
		myPage.addPicture(myPicture);
	});
*/


// Page Prototype
var Page = function(id) {
	// object properties
	this.description = "";
	this.pageOrder = -1;

	// load this object's properties from the DB using id
	this.load = function(id) {
		console.log("loading page: " + id);
	
		var results = lib.query("pages", {ID: id});
		
		// debug
		console.log("retrieved from db: ");
		console.log(results);
		
		// TODO: write error handler for no results case
		
		// copy values into this object
		// TODO: add all properties here
		// TODO: find a way to do this all at once
		this.setDescription(results[0].description);
		this.setPageOrder(results[0].pageOrder);
	
		return true;
	}

	this.save = function() {
		// store this object into the db
		var id = lib.insert("pages", this);
		lib.commit();// commit the db operation
		
		return id; // return new record id
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

	this.removePicture = function(picture_id) {
	  // TODO: implement this method
	
		return true; // return false if not successful
	}
	
	// constructor goes here?
	if(typeof(id) != "undefined") {
		this.load(id);
	}
}


// Pictures Prototype
var Pictures = function() {
	this.setKeyword = function(keyword) {
	  // TODO: implement this method
	
		return true;// return false if not successful
	}
	
	this.getKeyword = function(){
	  // TODO: implement this method
	
		return this.keyword;
	}

	this.setImageData = function(image) {
	  // TODO: implement this method
	
		// convert to binary data and save in DB

		return true;
	}

	this.getImageData = function() {
	  // TODO: implement this method
	
		return this.imageData();
	}
}


// Report prototype
var Report = function() {
	this.getThermometerByTime = function(datetime_start, datetime_end, page_id) {
	  // TODO: implement this method
	
		// calculate X/Y coordinates of “thermometer dot” that appears on a page 

		return x_y_coordinates;
	}

	this.getPictureByTime = function(datetime_start, datetime_end, page_id) {
	  // TODO: implement this method
	
		// return most popular page picture for a date/time range
	
		return pictureObject;
	}

	this.getPictureByLocation = function(datetime_start, datetime_end, page_id) {
	  // TODO: implement this method
	
		// return most popular page picture for location in a date/time range
	
		return pictureObject;
	}
}
