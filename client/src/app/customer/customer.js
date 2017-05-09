(function() {
		'use strict';
			angular
				.module('app.customer')
				.controller('cusController',cusController);

				cusController.$inject=['$http','logger','dataServices','API_URL'];

				function cusController($http,logger,dataServices,API_URL) {
					var vm = this;
					vm.customer=[];
					vm.currentPage=1;
					vm.pageSize=5;
					vm.cus={};
					activate();
					getCus();
					function activate() {
                		logger.info('Activated Customer View');
             
					}
					function getCus() {
						return dataServices.getCustomer()
							.then(function(response) {
								vm.customer = response;
							});
					}



					vm.add = function(customer) {
						
						dataServices.addCustomer(customer)
									.then(function() {
									getCus();
							logger.success('Add Customer Success');
									});
						

					};

					vm.delete = function(id,index) {
						dataServices.delCustomer(id)
						.then(function() {
						logger.success('Delete Customer Success')
						vm.customer.splice(index,1);
						});
					
					}
					vm.change = function(id,firstname,lastname,age,location) {
						vm.editing =true;
						vm.cus.id = id;
						vm.cus.firstname = firstname;
						vm.cus.lastname  = lastname;
						vm.cus.age = age;
						vm.cus.location = location;
					};

					vm.back  = function() {
						vm.cus ={};
						vm.editing = false;
					};

					vm.edit = function(data,id) {
						dataServices.putCustomer(data,id)
							.then(function() {
								logger.success('Edit Customer Success');
								getCus();
							});
					}
				};
})();