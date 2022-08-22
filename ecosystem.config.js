module.exports = {
	apps: [
			{
					name: "Asa Leon's Works(8443) -dev",
					script: "npm",
					automation: false,
					args: "run start-devServer",
					cwd: '/usr/share/nginx/asa-leon.works/',
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
					ignore_watch: ["node_modules", "log"],
			}
	],

	deploy: {
		production: {
			key: "$HOME/.ssh/alwclient_rsa",
			user: "macbookair",
			host: ["macbookair.local"],
			ssh_options: "StrictHostKeyChecking=no",
			ref: "production/main",
			repo: "higako@164.70.92.32:37415:higako/repo/alw.git",
			path: "/usr/share/nginx/html/asa-leon.works",
			'pre-setup': "yum install git ; ls -la",
			'post-setup': "ls -la",
			'pre-deploy-action': "echo 'This is a local executed command",
			'post-deploy': "npm install",
		},
	}
}
