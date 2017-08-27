function loadChrome(){
	$( "#mainPage" ).load( "func/chrome.html", function() {
		});
}

function previous(){
	$.post( "/api/input/previous", "" );
}

function next(){
	$.post( "/api/input/next", "" );
}

function reload(){
	$.post( "/api/input/reload", "" );
}