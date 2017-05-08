(function() {
		'use strict';
			angular
				.module('app.banner')
				.config(configRouter);

				configRouter.$inject=['$stateProvider'];

				function configRouter($stateProvider) {
					$stateProvider
						.state('shell',{
							url:'/',
							abstract:true,
							templateUrl:'/src/app/layout/banner.html'
						})
				};
})();