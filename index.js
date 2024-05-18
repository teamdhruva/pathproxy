var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();
var path = require('path');

const proxiedUrl = process.env.PROXIED_URL || "http://10.0.0.5/stream.mjpg";

app.get('/stream.mjpg', new MjpegProxy(proxiedUrl).proxyRequest);
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(8080, '127.0.0.1');
