module.exports = {
    apps: [
        {
            name: 'mintlify-server',
            script: './node_modules/mintlify',
            args: 'dev',
            interpreter: 'none',
            env: {
                NODE_ENV: 'development'
            }
        }
    ]
};
