

var loc = window.location, new_uri;
if (loc.protocol === "https:") {
    new_uri = "wss:";
} else {
    new_uri = "ws:";
}
new_uri += "//" + loc.host.split(":")[0];
new_uri += ":5678/process";

var processSocket = new WebSocket(new_uri);
processSocket.onmessage = function (evt)
{
	var receivedMessage = JSON.parse(evt.data);
	loadPlugin(receivedMessage.process.split(".")[0], receivedMessage.windowName);
}

function loadPlugin(pluginName, windowName){
	$( "#mainPage" ).load( "plugins/"+pluginName+"/index.html?windowName="+encodeURI(windowName), function() {
		});
}

function sendCodes(codes){
    $.ajax({
        type: "POST",
        url: "/keys",
        data: JSON.stringify({"keys": codes}),
        contentType: "application/json"
      });   
}