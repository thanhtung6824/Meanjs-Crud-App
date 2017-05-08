(function() {
		'use strict';
			angular
				.module('app.dashboard')
				.config(configRouter);

				configRouter.$inject=['$stateProvider'];

				function configRouter($stateProvider) {
					$stateProvider
						.state('shell.dashboard',{
							url:'dashboard',
							templateUrl:'/src/app/dashboard/dashboard.html',
							controller:'dbController',
							controllerAs:'vm',
							resolve:{
								customer:['dataServices',function(dataServices) {
									return dataServices.getCustomer();
								}]
							}
						})
				};
})();