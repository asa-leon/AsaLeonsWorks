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
	]
}