// WebSocket client logic
const WebSocket = require('ws');
const readline = require('readline');


// dont forget to import the port from somewhere

const connectToServer = (port) => {

    const ws = new WebSocket(`ws://localhost:${port}`);

    // Set up interface for user input
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    ws.on('open', () => {
        console.log(`client is connected to server on ws://localhost:${port}`);
        promptForMessage();
    })

    //handle incoming messages
    ws.on('message', (message) => {
        console.log(`\nRecieved : ${message}`);
        promptForMessage();
    })

    ws.on('close', () => {
        console.log('disconnected from server');
        rl.close();
    })

    ws.on('error', (error) => {
        console.log(`connection error: ${error.message}`);
    })


    //Prompt user for message

    const promptForMessage  = () => {
        rl.question('Enter message or "exit" to quit\n', (input) => {

            let trimInput = input.trim()
            if(trimInput.toLowerCase() === 'exit'){
                ws.close();
                rl.close();
            }else{
                ws.send(trimInput);
                promptForMessage()
            }
        })
    }
}

module.exports = { connectToServer };



