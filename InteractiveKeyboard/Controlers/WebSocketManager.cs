using InteractiveKeyboard.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebSocketSharp;
using WebSocketSharp.Server;

namespace InteractiveKeyboard.Controlers
{
    
    public class WebSocketManager
    {
        WebSocketServer ws;
        public WebSocketManager(ProcessManager processManager, InputKeysStrokes inputKeysStrokes)
        {
            ws = new WebSocketServer("ws://192.168.1.43:8889");
            ws.AddWebSocketService<ProcessManager>("/process", () => processManager);
            ws.AddWebSocketService<InputKeysStrokes>("/input", () => inputKeysStrokes);
            ws.Start();
        }        
    }
}
