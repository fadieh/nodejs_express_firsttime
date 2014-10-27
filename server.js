var express = require('express');
	app = express()

server = app.listen(3000, function() { console.log("Listening on port")})

app.get('/', function(req, res){
	res.send('Hello World');
});