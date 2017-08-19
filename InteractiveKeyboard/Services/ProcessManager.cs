using InteractiveKeyboard.Models;
using Newtonsoft.Json;
using System;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Text;
using WebSocketSharp;
using WebSocketSharp.Server;

namespace InteractiveKeyboard.Services
{
    public class ProcessManager : WebSocketBehavior
    {
        [Flags]
        public enum ProcessAccessFlags : uint
        {
            All = 0x001F0FFF,
            Terminate = 0x00000001,
            CreateThread = 0x00000002,
            VirtualMemoryOperation = 0x00000008,
            VirtualMemoryRead = 0x00000010,
            VirtualMemoryWrite = 0x00000020,
            DuplicateHandle = 0x00000040,
            CreateProcess = 0x000000080,
            SetQuota = 0x00000100,
            SetInformation = 0x00000200,
            QueryInformation = 0x00000400,
            QueryLimitedInformation = 0x00001000,
            Synchronize = 0x00100000
        }

        [DllImport("user32.dll")]
        static extern IntPtr GetForegroundWindow();

        [DllImport("user32.dll")]
        static extern int GetWindowText(IntPtr hWnd, StringBuilder text, int count);

        [DllImport("user32.dll")]
        static extern int GetWindowThreadProcessId(IntPtr hWnd, out int lpdwProcessId);

        public ProcessOutput processOutput { get; set; }

        public ProcessManager() { }

        public void send()
        {
            Send(JsonConvert.SerializeObject(processOutput));
        }
        protected override void OnMessage(MessageEventArgs e) { }

        public void GetActiveWindow(ProcessManager processManager)
        {
            const int nChars = 256;
            StringBuilder Buff = new StringBuilder(nChars);
            IntPtr handle = GetForegroundWindow();

            GetWindowText(handle, Buff, nChars);
            
            int processID = 0;
            int threadID = GetWindowThreadProcessId(handle, out processID);

            Process p = Process.GetProcessById(processID);
            ProcessOutput pout = new ProcessOutput();
            pout.id = p.Id;
            pout.name = p.MainModule.ModuleName;
            pout.title = Buff.ToString();

            if (!pout.Equals(processManager.processOutput))
            {
                processManager.processOutput = pout;
                processManager.send();
            }
        }
    }
}
