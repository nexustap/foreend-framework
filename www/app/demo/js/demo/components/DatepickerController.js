
/* 折叠的控制器定义
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-30
 * Version: $Revision$
 */

'use strict';

define([], function () {

	function DatepickerController($scope, $timeout) {
		console.debug("DatepickerController");

		$scope.today = function() {
			console.debug("DatepickerController / today");
			$scope.dt = new Date();
		};
		$scope.today();


		$scope.clear = function () {
			console.debug("DatepickerController / clear");
			
			$scope.dt = null;
		};

		$scope.$apply();
	};

	return DatepickerController;
});