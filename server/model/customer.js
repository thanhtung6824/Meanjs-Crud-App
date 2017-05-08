var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
	firstname:String,
	lastname:String,
	age: Number,
	location:String
});

var Customer = mongoose.model('tt',customerSchema);

module.exports = Customer;