(function() {
		'use strict';
			angular
				.module('app.core')
				.factory('logger',logger);

				logger.$inject=['toastr'];

			function logger(toastr) {
				var option ={
					success:success,
					error:error,
					warn:warn,
					info:info
				};
				return option;
 				
 			function success(message,data,title) {
 				toastr.success('Success : '+ message,data,title);
 			}

 			function error(message,data,title) {
 				toastr.error('Error : ' + message,data,title);
 			}

 			function warn(message,data,title) {
 				toastr.waring('Warning : ' + message,data,title);
 			}

 			function info(message,data,title) {
 				toastr.info('Info : ' + message,data,title);
 			}


			}
})();