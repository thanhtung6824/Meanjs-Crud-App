(function() {
		'use strict';
			var core = angular.module('app.core');

			core.config(configToastr)

			configToastr.$inject = ['toastr'];

			function configToastr(toastr) {
				toastr.options.timeOut=4000;
				toastr.options.positionClass="toast-bottom-right";
			};

			core.run(appRun)

			appRun.$inject=['$rootScope','$timeout'];

			function appRun($rootScope,$timeout) {
				$rootScope.showSplash=true;
				$timeout(function() {
				$rootScope.showSplash=false;
				},1500);
			}

			core.config(configRouter);

			configRouter.$inject=['$urlRouterProvider','$locationProvider'];

			function configRouter($urlRouterProvider,$locationProvider) {
				$urlRouterProvider.otherwise('/dashboard');
				$locationProvider.html5Mode(true);

		};

		core.filter('startFrom',startFrom);

		function startFrom() {
			return function(data,start) {
				return data.slice(start)
			}
		}
})();