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
		fs.existsSync('/etc/letsencrypt/live/wwwdev.asa-leon.works/privkey.pem') &&
		fs.existsSync('/etc/letsencrypt/live/wwwdev.asa-leon.works/cert.pem')

	const useHttps =
		process.env.HTTPS === 'true' && hasCertificates


	const options = {
		key: fs.readFileSync('/etc/letsencrypt/live/wwwdev.asa-leon.works/privkey.pem'),
		cert: fs.readFileSync('/etc/letsencrypt/live/wwwdev.asa-leon.works/cert.pem')
	}

	const server = https.createServer(options, expressApp)
	server.listen(port, host)

	console.log(`> Ready on https://${host}:${port}`)
})
