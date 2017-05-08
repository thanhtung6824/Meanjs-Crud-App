(function() {
		'use strict';
			angular
				.module('app.customer')
				.config(configRouter);

				configRouter.$inject=['$stateProvider'];

				function configRouter($stateProvider) {
					$stateProvider
						.state('shell.customer',{
							url:'customer',
							templateUrl:'/src/app/customer/customer.html',
							controller:'cusController',
							controllerAs:'vm'
							
						})
				};
})();