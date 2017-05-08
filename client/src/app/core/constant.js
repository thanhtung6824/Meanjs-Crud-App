(function() {
		'use strict';
			angular
				.module('app.core')
				.constant('toastr',toastr)
				.constant('API_URL','http://localhost:3000/');
})();