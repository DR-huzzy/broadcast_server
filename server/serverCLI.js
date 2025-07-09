#!/usr/bin/env node

console.log("CLI is running!"); // Debug line
//CLI command to start server
const { Command } = require('commander');
const { startServer } = require('./server');


const program = new Command();

program
    .name('broadcast-server')
    .description('A CLI to manage the WebSocket broadcast server')
    .version('1.0.0')

program
    .command('start')
    .description('Start the Websocket server')
    .option('-p , --port <number>','Port number (default: 8080)', '8080')
    .action((options) => {
        startServer(parseInt(options.port));
    })

program.parse(process.argv);