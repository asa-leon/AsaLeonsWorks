const express = require('express')
const next = require('next')
const https = require('https')
const fs = require('fs')

const port = parseInt(process.env.PORT || '8443')
const host = '0.0.0.0'
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev, port, host })

const handle = app.getRequestHandler()

app.prepare().then(async () => {

	const expressApp = express()

	expressApp.get('*', (req, res) => handle(req, res))

	// Use https if https option enabled
	const hasCertificates =
		fs.existsSync('/etc/certs/wwwdev/192.168.57.101.pem') &&
		fs.existsSync('/etc/certs/wwwdev/192.168.57.101-key.pem')

	const useHttps =
		process.env.HTTPS === 'true' && hasCertificates


	const options = {
		key: fs.readFileSync('/etc/certs/wwwdev/192.168.57.101-key.pem'),
		cert: fs.readFileSync('/etc/certs/wwwdev/192.168.57.101.pem')
	}

	const server = https.createServer(options, expressApp)
	server.listen(port, host)

	console.log(`> Ready on https://${host}:${port}`)
})
