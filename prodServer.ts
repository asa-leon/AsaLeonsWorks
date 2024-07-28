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
        fs.existsSync('/etc/letsencrypt/live/www.asa-leon.works/privkey.pem') &&
        fs.existsSync('/etc/letsencrypt/live/www.asa-leon.works/fullchain.pem')

    const useHttps =
        process.env.HTTPS === 'true' && hasCertificates


    const options = {
        key: fs.readFileSync('/etc/letsencrypt/live/www.asa-leon.works/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/www.asa-leon.works/fullchain.pem')
    }

    const server = https.createServer(options, expressApp)
    server.listen(port, hostname)

    console.log(`> Ready on https://${hostname}:${port}`)
})
