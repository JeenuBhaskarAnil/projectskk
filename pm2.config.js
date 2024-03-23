module.exports = {
  apps: [
    {
      name: 'backend',
      script: 'server.js'
    },
    {
      name: 'frontend',
      script: 'npm',
      args: 'start',
      cwd: 'frontend'
    }
  ]
};
