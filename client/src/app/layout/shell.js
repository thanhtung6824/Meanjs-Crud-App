(function() {
	 'use strict';
	 	angular
	 		.module('app.shell')
	 		.controller('Shell',Shell);

	 			Shell.$inject=['logger']

	 		function Shell(logger) {
	 			var vm = this;
	 			activate();

	 			function activate() {
	 				logger.info('Welcome to my site');
	 			}
	 		}
})();