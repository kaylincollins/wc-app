module.exports = {
  apps: [{
    name: 'wc-app',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-58-239-58.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/wcdpe-key.pem',
      ref: 'origin/master',
      repo: 'git@github.com:kaylincollins/wc-app.git',
      path: '/home/ubuntu/wc-app',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}