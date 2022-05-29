const express = require('express')
const next = require('next')
const https = require('https')
const fs = require('fs')

const port = parseInt(process.env.PORT || '443')
const host = 'asa-leon.works'
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev, port, host })

const handle = app.getRequestHandler()

app.prepare().then(async () => {

	const expressApp = express()

	expressApp.get('*', (req, res) => handle(req, res))

	// Use https if https option enabled
	const hasCertificates = 
		fs.existsSync('/etc/letsencrypt/live/www.asa-leon.works/privkey.pem') &&
		fs.existsSync('/etc/letsencrypt/live/www.asa-leon.works/cert.pem')

	const useHttps =
		process.env.HTTPS === 'true' && hasCertificates

	if (useHttps) {

		const options = {
			key: fs.readFileSync('/etc/letsencrypt/live/www.asa-leon.works/privkey.pem'),
			cert: fs.readFileSync('/etc/letsencrypt/live/www.asa-leon.works/cert.pem')
		}

		const server = https.createServer(options, expressApp)
		server.listen(port, host)

		console.log(`> Ready on https://${host}:${port}`)

	} else {

		expressApp.listen(port, host)

		console.log(`> Ready on http://${host}:${port}`)
	}
})