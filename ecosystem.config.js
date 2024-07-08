module.exports = {
    apps: [
      {
        name: 'mintlify-server',
        script: 'mintlify',
        args: 'dev',
        exec_mode: 'fork',
        watch: true,
      },
    ],
  };
  