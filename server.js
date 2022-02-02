const { createServer } = require('https');
const { URL } = require('url');
const next = require('next');
const fs = require('fs');

const app = next({ dev: true });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/www.asa-leon.works/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/www.asa-leon.works/cert.pem'),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const baseURL = 'https://' + req.headers.host + '/';
    const reqUrl = new URL(req.url, baseURL);
    handle(req, res, reqUrl);
  }).listen(443, (err) => {
    if (err) throw err;
    console.log('> Ready on https://www.asa-leon.works/');
  });
});
