import express from 'express'
import next from 'next'
import https from 'https'
import fs from 'fs'

const port = parseInt(process.env.PORT || '8443')
const hostname = '0.0.0.0'
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev, hostname, port  })

const handle = app.getRequestHandler()

app.prepare().then(async () => {

	const expressApp = express()

	expressApp.get('*', (req, res) => handle(req, res))

	// Use https if https option enabled
	const hasCertificates =
		fs.existsSync('/etc/certs/192.168.57.2.pem') &&
		fs.existsSync('/etc/certs/192.168.57.2-key.pem')

	const useHttps =
		process.env.HTTPS === 'true' && hasCertificates


	const options = {
		key: fs.readFileSync('/etc/certs/192.168.57.2-key.pem'),
		cert: fs.readFileSync('/etc/certs/192.168.57.2.pem')
	}

	const server = https.createServer(options, expressApp)
	server.listen(port, hostname)

	console.log(`> Ready on https://${hostname}:${port}`)
})
