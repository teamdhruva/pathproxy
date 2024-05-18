var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();

const proxiedUrl = process.env.PROXIED_URL || "http://10.0.0.5/stream.mjpeg";
const port = process.env.PORT || 8080;

app.get('/stream.mjpg', new MjpegProxy(proxiedUrl).proxyRequest);
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
