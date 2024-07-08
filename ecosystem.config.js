module.exports = {
    apps: [
        {
            name: 'mintlify-server',
            script: '/root/.nvm/versions/node/v20.15.0/bin/mintlify',
            args: 'dev',
            interpreter: 'none',
            env: {
                NODE_ENV: 'development'
            }
        }
    ]
};
