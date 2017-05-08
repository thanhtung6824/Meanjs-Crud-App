(function() {
		'use strict';
			angular
				.module('app.core')
				.factory('dataServices',dataServices);
 				
 				dataServices.$inject=['$http','API_URL','$q'];

				function dataServices($http,API_URL,$q) {
					var services={
						getCustomer : getCustomer,
						addCustomer : addCustomer,
						putCustomer : putCustomer,
						delCustomer : delCustomer
					}
					return services;

					function getCustomer() {
						return $http.get(API_URL+'api/customer')
								 .then(getCustomerSuccess)
								 .catch(function(err) {
							
							 });
								function getCustomerSuccess(response) {
									return response.data;
					}
					}

					function addCustomer(data) {
						return $http.post(API_URL+'api/customer',data)
								 .then(addCustomerSuccess)
								 .catch(function(err) {
							 		console.log(err);
							 });
					function addCustomerSuccess(response) {
							console.log(response);
					}
					}

					function putCustomer(data,id) {
						return $http.put(API_URL + 'api/customer/'+id,data)
									.then(putCustomerSuccess)
									.catch(function(err) {
										console.log(err);
									});
					function putCustomerSuccess(response) {
						console.log(response.data)
						return response.data;
					}
					}

					function delCustomer(id,index) {
						return $http.delete(API_URL + 'api/customer/'+id)
									.then(delCustomerSuccess)
									.catch(function(err) {
										console.log(err);
									});
					function delCustomerSuccess(response) {
						console.log(response.data)
						return response.data;
					}
					}
				};
})();