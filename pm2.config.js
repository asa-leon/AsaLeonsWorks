module.exports = {
	apps: [
		{
			name: "Asa Leon's Works",
			script: "./server.js",
			cwd: '/home/higako/asa-leon.works/',
			watch: ['server.js', '/public'],
			ignore_watch: ["node_modules", "log", ".git"],
			
			env_production: {
				PORT: 443,
				NODE_ENV: 'production',
			}
		}
	]
}