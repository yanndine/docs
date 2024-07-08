module.exports = {
  apps: [
    {
      name: 'mintlify-server',
      script: 'start-mintlify.js',
      exec_mode: 'fork',
      watch: true,
    },
  ],
};
