// Page Prototype
var Page = function() {
	this.setDescription = function(description) {
		return true;
	}
	
	this.getDescription = function() {
		return this.description;
	}
	
	this.setPageOrder = function(order) {
		return true;
	}
	
	this.getPageOrder = function() {
		return this.pageOrder;
	}
	
	this.addPicture = function(pictureObject) {
		// add row to pages_pictures table

		return true;
	}

	this.removePicture = function(picture_id) {
		return true; // return false if not successful
	}
}

// Pictures Prototype
var Pictures = function() {
	this.setKeyword = function(keyword) {
		return true;// return false if not successful
	}
	
	this.getKeyword = function(){
		return this.keyword;
	}

}


// Pictures Prototype
var Pictures = function() {
	this.setKeyword = function(keyword) {
		return true;// return false if not successful
	}
	
	this.getKeyword = function(){
		return this.keyword;
	}

	this.setImageData = function(image) {
		// convert to binary data and save in DB

		return true;
	}

	this.getImageData = function() {
		return this.imageData();
	}
}


// Report prototype

var Report = function() {
	this.getThermometerByTime = function(datetime_start, datetime_end, page_id) {
		// calculate X/Y coordinates of “thermometer dot” that appears on a page 

		return x_y_coordinates;
	}

	this.getPictureByTime = function(datetime_start, datetime_end, page_id) {
		// return most popular page picture for a date/time range
	
		return pictureObject;
	}

	this.getPictureByLocation = function(datetime_start, datetime_end, page_id) {
		// return most popular page picture for location in a date/time range
	
		return pictureObject;
	}
}
