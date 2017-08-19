using Newtonsoft.Json;
using System.Collections.Generic;
using WebSocketSharp;
using WebSocketSharp.Server;
using WindowsInput;
using WindowsInput.Native;


namespace InteractiveKeyboard.Services
{
    public class InputKeysStrokes : WebSocketBehavior
    {
        public InputKeysStrokes() { }

        protected override void OnMessage(MessageEventArgs e)
        {
            List<int> keycodes = JsonConvert.DeserializeObject< List<int> >(e.Data);

            int middle = keycodes.Count /2;

            var key = new KeyboardSimulator(new InputSimulator());

            for (int i = 0; i < middle; i++)
            {
                key.KeyDown((VirtualKeyCode) keycodes[i]);
            }

            for (int i = middle; i < keycodes.Count; i++)
            {
                key.KeyUp((VirtualKeyCode)keycodes[i]);
            }
        }
    }
}
