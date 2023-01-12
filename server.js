//server.js
const express = require('express');

//for Helmet / hsts
const helmet = require('helmet');
// const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);

// Sets "Strict-Transport-Security: max-age=5184000; includeSubDomains".
const oneWeekInSeconds = 604800
app.use(helmet.hsts({
  maxAge: oneWeekInSeconds
}));
