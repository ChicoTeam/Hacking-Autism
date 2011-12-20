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
		console.log($.urlParam('ID'));

		// TODO: put in dynamic code to add images here
	});

	$('#createPageForm').submit(function(){
		var page = new Page();
		page.description = $(this).find('input[name="description"]').val();
		page.save();

		this.reset();
	});
});
