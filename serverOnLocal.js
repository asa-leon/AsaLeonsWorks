const express = require('express')
const next = require('next')
const https = require('https')
const fs = require('fs')

const port = parseInt(process.env.PORT || '4300')
const host = 'localhost'
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev, port, host })

const handle = app.getRequestHandler()

app.prepare().then(async () => {

	const expressApp = express()

	expressApp.get('*', (req, res) => handle(req, res))

	// Use https if https option enabled
	const hasCertificates = 
		fs.existsSync('./certificates/localhost-key.pem') &&
		fs.existsSync('./certificates/localhost.pem')

	const useHttps =
		process.env.HTTPS === 'true' && hasCertificates

	if (useHttps) {

		const options = {
			key: fs.readFileSync('./certificates/localhost-key.pem'),
			cert: fs.readFileSync('./certificates/localhost.pem')
		}

		const server = https.createServer(options, expressApp)
		server.listen(port, host)

		console.log(`> Ready on https://${host}:${port}`)

	} else {

		expressApp.listen(port, host)

		console.log(`> Ready on http://${host}:${port}`)
	}
})