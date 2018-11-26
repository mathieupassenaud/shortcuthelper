# Touchable shortcut helper

Project description : https://www.mathieupassenaud.fr/my-smartphone-as-a-shortcut-helper/

# Installation
Need python > 3

pip install win32gui
pip install pywin32
pip install flask
pip install websocket
pip install PIL
pip install keyboard
pip install qrcode

# Usage
python shortcuthelper.py

A QRCode is shown, scan this code with your smartphone/tablet. It initialize a connection between your computer and your device. Then, the shortcut page will change while you're working.

# Developers

You can develop some plugins, depending of your needs.
A plugin is a webpage showing buttons. Each button is mapped on a keyboard shortcut. 
Clone the example directory and build your own. The plugin name is the process name. IE "firefox" for "firefox.exe".

While the plugin is loaded, window name is given to the plugin with parameter "windowName". So, by plugin, you can adjust your interface depending of the window title.