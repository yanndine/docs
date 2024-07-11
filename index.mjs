import { exec } from 'child_process';
import process from "process";
import http from "http";

const command = 'mintlify dev --3000';

let serverRunning = true;

const checkServer = () => {
    http.get('http://localhost:3000', (res) => {
        if (res.statusCode !== 200) {
            console.error(`Server responded with status code: ${res.statusCode}`);
            serverRunning = false;
        } else {
            serverRunning = true;
        }
    }).on('error', (err) => {
        console.error(`Error: ${err.message}`);
        serverRunning = false;
    });
};

exec(command, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error executing command: ${err}`);
        process.exit(1);
    }
    console.log(stdout);
    console.error(stderr);
});

const intervalTime = 1000 * 60 * 30

const interval = setInterval(() => {
    checkServer();
    if (!serverRunning) {
        console.log("Server is no longer running on port 3000, exiting...");
        clearInterval(interval);
        process.exit(1);
    }
}, (intervalTime));

process.on('exit', () => {
    clearInterval(interval);
});
