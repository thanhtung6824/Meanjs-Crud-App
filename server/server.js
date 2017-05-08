var express = require('express');
var app = express();
var cors = require('cors');
var morgan  = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var customer = require('./api/api');
var db = "mongodb://localhost/tt";
var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

//connect db
mongoose.connect(db,function(err) {
	if(err) throw err;
	console.log('Connect Db Success');
});

//app use
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use(morgan('dev'));

app.use('/api', customer);
app.listen(port,function(err) {
	if(err) throw err;

	console.log('App listening on port :' , port);
});

