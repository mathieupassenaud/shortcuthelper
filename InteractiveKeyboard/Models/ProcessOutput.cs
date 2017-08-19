using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InteractiveKeyboard.Models
{
    public class ProcessOutput
    {
        public string name { get; set; }
        public string title { get; set; }
        public int id { get; set; }

        public bool Equals(ProcessOutput p)
        {
            if(p == null)
            {
                return false;
            }
            return (this.name.Equals(p.name) && this.title.Equals(p.title) && this.id == p.id);
        }
    }

}
