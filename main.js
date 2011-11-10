// for use on test.html

// jquery top level container
$(document).ready(function() {
	// get all pages from db
	var pageArray = lib.query("pages");
	
	// get main menu content container
	$content = $('<ul data-role="listview" data-inset="true" />');
	$.each(pageArray, function(i, page){
		$content.append('<li><a href="#pageoption">'+page.description+'</a></li>');
	});
	
	// add content to page when it is crated
	$('#mainmenu').live('pagecreate',function(event){
		$('#mainmenu div[data-role="content"]').append($content);
	});
});

