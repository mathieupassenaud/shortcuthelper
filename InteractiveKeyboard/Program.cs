using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using InteractiveKeyboard.Controlers;
using InteractiveKeyboard.Services;
using System.Threading;

namespace InteractiveKeyboard
{
    class Program
    {
        static void Main(string[] args)
        {
            string myFolder = @"C:\static";
            ProcessManager p = new ProcessManager();
            InputKeysStrokes i = new InputKeysStrokes();
            WebSocketManager WebSocketManager = new WebSocketManager(p, i);

            //create server with auto assigned port
            WebServer myServer = new WebServer(myFolder, 8888);

            while (true)
            {
                p.GetActiveWindow(p);
                Thread.Sleep(250);
            }
                

            myServer.Stop();
        }
    }
}
