var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/weather-app/dist'));

app.all('*', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/weather-app/dist/index.html'));
})

app.listen(8000, function () {
    console.log('listening on port 8000');
})