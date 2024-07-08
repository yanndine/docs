module.exports = {
    apps: [
        {
            name: 'mintlify-server',
            script: 'mintlify',
            args: 'dev',
            interpreter: 'none',
            env: {
                NODE_ENV: 'development'
            }
        }
    ]
};
