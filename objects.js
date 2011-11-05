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
var Page = function(ID) {
	// constructor goes here?
	this.description = "";
	if(typeof(ID) != "undefined") {
		this.ID = ID; // TODO: use this id to get DB data
	}
	
	this.load = function(id) {
		// load this object's properties from the DB using id
		var myPageData = lib.query("Pages", {ID: id});
		
		this = JSON.parse(myPageData);
		
		return true;
	}

	this.save = function() {
		// serialize this object and store into the db
		thisAsJSON = JSON.stringify(this);
		var id = lib.insert("Pages", thisAsJSON);
		console.log(thisAsJSON);
		lib.commit;
		return id; // return new record id
	}

	this.setDescription = function(description) {
	  this.description = description;
		return true;
	}
	
	this.getDescription = function() {
		return this.description;
	}
	
	this.setPageOrder = function(order) {
	  // TODO: implement this method
		return true;
	}
	
	this.getPageOrder = function() {
	  // TODO: implement this method
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
