const https = require('https')
const { parse } = require('url')
const fs = require('fs')

const next = require('next')
const { config } = require('process')
const port = parseInt(process.env.PORT, 10) || '3000'
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: __dirname })
const host = 'localhost'
const handle = app.getRequestHandler()

const options = {
	key: fs.readFileSync('./certificates/localhost.key'),
	cert: fs.readFileSync('./certificates/localhost.crt')
}


app.prepare().then(() => {
	https.createServer(options, (req, res) => {
		const parsedUrl = parse(req.url, true)
		handle(req, res, parsedUrl)
		console.log(`> Ready on https://localhost:${port}`)
	}).listen(port, err => {
		if (err) throw err
		console.log(`> Ready on localhost:${port}`)
	})
})
