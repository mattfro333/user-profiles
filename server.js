var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

var app = express();

var corsOptions = {
  origin: 'https://localhost:3777'
};

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret}));
app.use(express.static(__dirname + '/public'));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.profile);
app.listen(3777, function() {
  console.log('Express is running on 3777')
})
