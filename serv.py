from SimpleWebSocketServer import SimpleWebSocketServer, WebSocket
import datetime

class SimpleEcho(WebSocket):

    def handleMessage(self):
        # echo message back to client
        # self.sendMessage(self.data)
        now = str(datetime.datetime.now()).replace(' ','_').replace(':','_')
        with open("grille."+now,"w") as f:
            f.write(self.data)
        print("got: "+self.data)

    def handleConnected(self):
        print(self.address, 'connected')

    def handleClose(self):
        print(self.address, 'closed')

server = SimpleWebSocketServer('', 8000, SimpleEcho)
server.serveforever()

