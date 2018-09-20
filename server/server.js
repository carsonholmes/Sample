// This is a node express application
var express = require('express');
var app = express();
console.log("Starting server...");

app.get('/', function (req, res) {
    res.send('Hello from SDE Node Sample!');
});

app.listen(3000, function () {
    console.log('Server listening on port 3000');
});