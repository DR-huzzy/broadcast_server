//WebSocket server logic
const WebSocket = require('ws');


const startServer = (port) => {

    //create the websocket server
    const wss = new WebSocket.Server({ port });

    //Track all connected clients
    const clients = new Set();


    wss.on('connection', (ws) => {

        //Add new client to the set
        clients.add(ws);
        console.log(`New client connected, Clients connected: ${clients.size}`);

        // handle messages from client 
        ws.on('message',(message) => {

            // client message
            console.log(`Recieved: ${message.toString()}`);

            //broad cast to all other clients
            //Ensures the client is still connected.
            //excludes the sender from receiving their own message
            clients.forEach((client) => {
                if(client !== ws && client.readyState === WebSocket.OPEN){
                    client.send(message.toString());
                }
            })

        })

        // handle client disconnection
        ws.on('close', () => {
            clients.delete(ws);
            console.log(`Clients disconnected. Remaining clients: ${clients.size}`);
        })

        // error handler
        ws.on('error', (error) => {
            console.log(`client error: ${error}`)
        })

        
    })

    console.log(`web socket server running on ws://localhost:${port}`);

}

module.exports = { startServer };



