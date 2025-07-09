#!/usr/bin/env node
//CLI command to connect client

const { Command } = require('commander');
const { connectToServer } = require('./client');


const program = new Command();

program
    .name('broadcast-client')
    .description('A CLI to manage the WebSocket broadcast client')
    .version('1.0.0')

program
    .command('connect')
    .description('Connect to the WebSocket server as a client')
    .option('-p, --port <number>', 'Server port (default: 8080)', '8080')
    .action((options) => {
        connectToServer(parseInt(options.port));
    })

program.parse(process.argv);