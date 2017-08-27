using System.Drawing;
using System.Windows.Forms;

namespace InteractiveKeyboard
{
    partial class QRView
    {
        public string url;

        public QRView(string url)
        {
            this.url = url;
            PictureBox qrBox = new PictureBox();
            qrBox.Load(url);
            qrBox.Location = new Point(1, 1);
            qrBox.Size = new Size(500, 500);
            this.Controls.Add(qrBox);
        }
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.SuspendLayout();
            // 
            // QRView
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(876, 577);
            this.Name = "QRView";
            this.Text = "Interactive Keyboard";
            this.ResumeLayout(false);

        }

        #endregion
    }
}