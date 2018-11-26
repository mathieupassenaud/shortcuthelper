import psutil
import keyboard
import os
from flask import Flask, request, redirect, abort, send_from_directory 
import qrcode
from PIL import Image                                                                                
import socket
from threading import Thread
import uuid
import win32gui
import win32process
import asyncio
import datetime
import websockets
import time

app = Flask(__name__)
remoteAddr = None
globalUuid = None
connected = set()

async def pub_sub(websocket, path):
    global connected
    if len(connected) == 1:
      return
    connected.add(websocket)
    try :
      tempWindowName=win32gui.GetWindowText (win32gui.GetForegroundWindow())
      threadpid, procpid = win32process.GetWindowThreadProcessId (win32gui.GetForegroundWindow())
      try:
          p = psutil.Process(procpid)
          await websocket.send("{ \"process\": \""+p.name()+"\",  \"windowName\": \" "+tempWindowName+"\"}")
      except psutil.NoSuchProcess:
          await websocket.send("{ \"process\": \"\", \"windowName\": \" "+tempWindowName+"\"}")
      while True:
          tempWindowName=win32gui.GetWindowText (win32gui.GetForegroundWindow())
          await asyncio.sleep(0.5)
          if (tempWindowName==win32gui.GetWindowText (win32gui.GetForegroundWindow())):
              pass
          else:
              tempWindowName=win32gui.GetWindowText (win32gui.GetForegroundWindow())
              threadpid, procpid = win32process.GetWindowThreadProcessId (win32gui.GetForegroundWindow())
              try:
                  p = psutil.Process(procpid)
                  await websocket.send("{ \"process\": \""+p.name()+"\",  \"windowName\": \" "+tempWindowName+"\"}")
              except psutil.NoSuchProcess:
                  await websocket.send("{ \"process\": \"\", \"windowName\": \" "+tempWindowName+"\"}")
    finally:
      connected.remove(websocket)
      generateQRCode()

@app.before_request
def limit_remote_addr():
  global remoteAddr
  if remoteAddr != None and request.remote_addr != remoteAddr:
    abort(403)

@app.route('/keys', methods=['POST'])
def sendKeys():
  try:
    keys = request.json['keys']
  except Exception as e:
    print ("exception while decoding")
    return abort(500)
  keyboard.press_and_release(keys)
  return "ok"

@app.route('/static/<path:path>')
def send_js(path):
  return send_from_directory('static', path)

@app.route('/ping')
def ping():
  global remoteAddr
  global globalUuid
  if (request.args.get('id') == globalUuid):
    remoteAddr = request.remote_addr
    return redirect("./static/index.html", code=302)
  else:
    return abort(403)

def generateQRCode():
  global remoteAddr
  global globalUuid
  remoteAddr = None
  s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
  s.connect(("8.8.8.8", 80))
  ip = s.getsockname()[0]
  s.close()
  globalUuid = str(uuid.uuid1())
  img = qrcode.make("http://"+ip+":5555/ping?id="+globalUuid)
  img.show()

def flaskThread():
  app.run(host='0.0.0.0', port=5555, debug=False)

if __name__ == '__main__':
  generateQRCode()
  thread = Thread(target = flaskThread, args = ())
  thread.start()
  start_server = websockets.serve(pub_sub, '0.0.0.0', 5678)
  asyncio.get_event_loop().run_until_complete(start_server)
  asyncio.get_event_loop().run_forever()
  thread.join()