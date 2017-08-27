using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using InteractiveKeyboard.Controlers;
using InteractiveKeyboard.Services;
using System.Threading;
using System.Windows.Forms;

namespace InteractiveKeyboard
{
    class Program
    {
        static void Main(string[] args)
        {
            string myFolder = @"C:\Users\Mathieu\Documents\dev\interactive-keyboard2\InteractiveKeyboard\static";
            ProcessManager p = new ProcessManager();
            InputKeysStrokes i = new InputKeysStrokes();
            WebSocketManager WebSocketManager = new WebSocketManager(p, i);

            //create server with auto assigned port
            WebServer myServer = new WebServer(myFolder, 8888);

            //Application.Run(new QRView("https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=http://192.168.1.31:8889&choe=UTF-8"));

            while (true)
            {
                p.GetActiveWindow(p);
                Thread.Sleep(250);
            }
                

            myServer.Stop();
        }
    }
}
