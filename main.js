// for use on jquery-mobile-test.html

// jquery top level container
$(document).ready(function() {
	// create new list element
	$content = $('<ul data-role="listview" data-inset="true" />');
	
	// get all pages from db
	var pageArray = lib.query("pages");
	
	// add pages to list element
	$.each(pageArray, function(i, page){
		$content.append('<li><a href="#pageoption">'+page.description+'</a></li>');
	});
	
	// add list element to main menu page when it is created
	$('#mainmenu').bind('pagecreate',function(event){
		$('#mainmenu div[data-role="content"]').append($content);
	});
	
	
	$('#createPageForm').submit(function(){
		var page = new Page();
		page.description = $(this).find('input[name="description"]').val();
		page.save();

		// add page and refresh list of pages
		$content.append('<li><a href="#pageoption">'+page.description+'</a></li>').listview('refresh');
	});
});
