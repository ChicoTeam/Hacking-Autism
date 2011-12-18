// for use on jquery-mobile-test.html

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
			$content.append('<li><a href="#pageoption">'+page.description+'</a></li>');
		});		

		// add content to mainmenu
		$('#mainmenu div[data-role="content"]').append($content);
	});
	
	
	$('#createPageForm').submit(function(){
		var descInput = $(this).find('input[name="description"]');

		var page = new Page();
		page.description = descInput.val();
		page.save();

		descInput.val('');
	});
});
