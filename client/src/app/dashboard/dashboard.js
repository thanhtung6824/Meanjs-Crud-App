(function() {
		'use strict';
			angular
				.module('app.dashboard')
				.controller('dbController',dbController);

				dbController.$inject=['customer','logger'];

				function dbController(customer,logger) {
					var vm = this;
					vm.customer = [];
					activate()
					function activate() {
						logger.info('Activated Dashboard View')
						vm.customer = customer;
					}
				};
})();