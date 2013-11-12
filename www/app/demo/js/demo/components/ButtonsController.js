
/* 按钮的控制器定义
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-30
 * Version: $Revision$
 */

'use strict';

define([], function () {

	function ButtonsController($scope) {
		console.debug("AlertController");

		$scope.singleModel = 1;

		$scope.radioModel = 'Middle';

		$scope.checkModel = {
	    	left: false,
	    	middle: true,
	    	right: false
	  	};

	  $scope.$apply();
	};

	return ButtonsController;
});