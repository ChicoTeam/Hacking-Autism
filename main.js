// for use on test.html

// jQuery container (put all jQuery code in here)
$(document).ready(function(){
	// get all pages from db
	var pageArray = lib.query("pages");
	
	$content = $('div[data-role="content"]');
	$.each(pageArray, function(i, page){
		$content.append('<p><a href="#pageoption">'+page.description+'</a></p>');
	});
});
