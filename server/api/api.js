var express = require('express');
var cusRouter = express.Router();
var customer = require('../router/routes');

cusRouter.route('/customer')
		  .get(customer.get)
		  .post(customer.post);

cusRouter.route('/customer/:id')
		  .get(customer.getOne)
		  .put(customer.put)
		  .delete(customer.delete);


module.exports = cusRouter;