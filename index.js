var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var app = express();

const proxiedUrl = process.env.PROXIED_URL || "http://10.0.0.5/stream.mjpg";

app.get('/stream.mjpg', new MjpegProxy(proxiedUrl).proxyRequest);

app.listen(8080);
console.log('magic is happening');
