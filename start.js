var express = require('express');
var app = express();


app.use('/ruma',express.static(__dirname + '/.'));

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à l\'accueil');
});

app.listen(8080);