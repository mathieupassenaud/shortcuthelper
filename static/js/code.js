

var processSocket = new WebSocket("ws:192.168.1.97:5678/process");
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