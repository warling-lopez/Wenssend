const express = require('express');
const http = require('http');
const webSockets = require('ws')

const app = express();

const server = http.createServer(app);

const wst = new webSockets.Server({ server });

app.use(express.static('public/src'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/src/index.html');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});