// for use on jquery-mobile-test.html

// gets url parameters by name
$.urlParam = function(name){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}


// jquery top level container
$(document).ready(function() {

	// "pagecreate" is called anytime a jquery mobile page is loaded
	$('#mainmenu').live('pagecreate',function(event){
		// get all pages from db
		var pageArray = lib.query("pages");

		// create new list element
		$content = $('<ul id="pagelist" data-role="listview" data-inset="true" />');

		// add pages to list element
		$.each(pageArray, function(i, page){
			$item = $('<li><a href="page.html?ID='+page.ID+'">'+page.description+'</a></li>');
			$content.append($item);
		});		

		// add content to mainmenu
		$('#mainmenu div[data-role="content"]').append($content);
	});
	
	// handle viewpage display
	$('#viewpage').live('pageshow',function(event){
		var page_ID = $.urlParam('ID');// note: this doesn't work during the pagecreate event

		var picIDs = new Page(page_ID).getAllPictureIDs();

		// dynamically add images
		$.each(picIDs, function(i, picID){
			var picture = new Picture(picID);
			var $img = $('<img src="'+picture.imageData+'">');
			$('#viewpage div[data-role="content"]').prepend($img);
		});

		var $addpic_link = $(this).find('.addpic_link');
		$addpic_link.attr('href',$addpic_link.attr('href') + '?page_ID=' + page_ID);
	});

	// dynamically create pictures page
	$('#pictures_page').live('pageshow',function(event){
		var page_ID = $.urlParam('page_ID');// note: this doesn't work during the pagecreate event

		var pictures_table = lib.query('pictures');

		$.each(pictures_table, function(i, pic_row){
			var picture = new Picture(pic_row.ID);
			var $img = $('<img data-id="'+picture.ID+'" src="'+picture.imageData+'">');
			$img.click(function(){
				var pic_id = $(this).data('id');
				var page = new Page(page_ID);
				page.addPicture(pic_id);
			});
			$('#pictures_page div[data-role="content"]').append($img);
		});
	});

	$('#createPageForm').submit(function(){
		var page = new Page();
		page.description = $(this).find('input[name="description"]').val();
		page.save();

		this.reset();
	});
});


function load_db_with_samples(){
	var page = new Page();
	page.description = "Neat images";
	page.save();

	var pic = new Picture();
	pic.imageData = "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7";
	pic.save();

	page.addPicture(pic.ID);

	var pic2 = new Picture();
	pic2.imageData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC";
	pic2.save();

	var page2 = new Page();
	page2.description = "another page";
	page2.save();
	page2.addPicture(pic2.ID);

}