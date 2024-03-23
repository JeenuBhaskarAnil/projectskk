module.exports = {
  apps: [
    {
      name: 'frontend',
      script: 'npm',
      args: 'start',
      cwd: 'frontend',
      autorestart: true,
      watch: true,
      ignore_watch: ['node_modules'],
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },
    {
      name: 'backend',
      script: 'npm',
      args: 'start',
      cwd: 'backend',
      autorestart: true,
      watch: true,
      ignore_watch: ['node_modules'],
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 5000
      }
    }
  ]
};
