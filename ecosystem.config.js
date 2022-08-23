module.exports = {
	apps: [
			{
					name: "Asa Leon's Works(8443) -dev",
					script: "npm",
					automation: false,
					args: "run start-devServer",
					cwd: '/usr/share/nginx/html/asa-leon.works/',
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
					port: 37415,
			}
	],

	deploy: {
		production: {
			key: "/Users/macbookair/.ssh/alwclient_rsa",
			user: "higako",
			host: "164.70.92.32",
			ssh_options: "StrictHostKeyChecking=no",
			ref: "origin/main",
			repo: "https://github.com/asa-leon/AsaLeonsWorks.git",
			path: "/usr/share/nginx/html/asa-leon.works",
			'port': 37415,
			'pre-setup': "yum install git ; ls -la",
			'post-setup': "ls -la",
			'pre-deploy-action': "echo 'This is a local executed command'",
			'post-deploy': "npm install",
		},
	}
}