module.exports = {
    apps: [
            {
                    name: "Asa Leon's Works(8443) -prod",
                    script: "npm",
                    automation: false,
                    args: "run start-prodServer",
                    cwd: '/usr/share/nginx/html/www.asa-leon.works/',
                    env: {
                            PORT: 8443,
                            NODE_ENV: "development"
                    },
                    env_production: {
                            PORT: 8443,
                            NODE_ENV: "production",
                    },
                    watch: ["server", "client"],
                    // Delay between restart
                    ignore_watch: ["node_modules", "log"]
            }
    ],

    deploy: {
		development: {
            key: "/Users/macbookair/.ssh/alwclient_rsa",
            user: "higako",
            host: "192.168.57.101",
            ssh_options: "StrictHostKeyChecking=no",
            ref: "origin/main",
            repo: "https://github.com/asa-leon/AsaLeonsWorks.git",
            path: "/usr/share/nginx/html/wwwdev.asa-leon.works",
            'pre-setup': "yum install git ; ls -la",
            'post-setup': "ls -la",
            'pre-deploy-action': "echo 'This is a local executed command'",
            'post-deploy': "rsync -a ./ ../ --exclude 'ecosystem.config.js' && cd ../ && npm install && npm run build && pm2 start pm2Dev.config.js",
        },
        production: {
            key: "/Users/macbookair/.ssh/alwclient_rsa",
            user: "asaleon",
            host: "116.80.63.228",
            ssh_options: "StrictHostKeyChecking=no",
            ref: "origin/main",
            repo: "https://github.com/asa-leon/AsaLeonsWorks.git",
            path: "/usr/share/nginx/html/www.asa-leon.works",
            'pre-setup': "yum install git ; ls -la",
            'post-setup': "ls -la",
            'pre-deploy-action': "echo 'This is a local executed command'",
            'post-deploy': "rsync -a ./ ../ --exclude 'ecosystem.config.js' && cd ../ && npm install && npm run build && pm2 start pm2.config.js",
        },
    }
}
