const { exec } = require('child_process');

const command = 'mintlify dev';

exec(command, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error executing command: ${err}`);
        return;
    }
    console.log(stdout);
    console.error(stderr);
});
