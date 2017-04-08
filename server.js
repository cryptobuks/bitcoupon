var express = require('express')
   app = express(), // Web framework to handle routing requests
   bodyParser = require('body-parser'),
 app.use(bodyParser());
 app.use('/',express.static(__dirname));
 app.listen(8080);
 console.log('Server listening on port 8080');
