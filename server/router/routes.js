var Customer = require('../model/customer');

exports.get = function(req,res) {
	Customer.find({}).sort({'_id':-1})
					 .exec(function(err,user) {
					 	if(err) throw err;
					 	res.json(user);
					 });;
};

exports.getOne = function(req,res) {
	Customer.findById(req.params.id,function(err,cus) {
		if(err){
			res.json(err);
		}else{
			res.json(cus);
		}
	});
};

exports.post = function(req,res) {
	var customer = new Customer(req.body);
	customer.firstname = req.body.firstname;
	customer.lastname  = req.body.lastname;
	customer.age       = req.body.age;
	customer.location  = req.body.location;
	customer.save(function(err,cus) {
		if(err){
			res.json(err);
		}else{
			res.json({messgae:'Add Customer Success'})
		}
	});


};

exports.put  = function(req,res) {
	Customer.findByIdAndUpdate(req.params.id,req.body,function(err) {
		if(err){
			res.json(err);
		}else{
		res.json({message:'Edit Customer Success'});

		}
	});
};

exports.delete = function(req,res) {
	Customer.findByIdAndRemove(req.params.id,function(err) {
		if(err){
			res.json(err);
		}else{
		res.json({message:'Delete Customer Success'});

		}
	});
};