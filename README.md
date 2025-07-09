# Broadcast Server
A WebSocket server that broadcasts messages to all connected clients.

How to Run

1. Install dependencies:
   ```bash
   npm install
   

2. Start the server:
   ```bash
   broadcast-server start --port 8080
   

3. Connect clients (in separate terminals):
   ```bash
   broadcast-server connect --port 8080
   

## Available Commands
`broadcast-server start --port <port>`  Starts the server 
`broadcast-server connect --port <port>`  Connects as a client 
