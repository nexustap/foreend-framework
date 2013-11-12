
/* 折叠的控制器定义
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-30
 * Version: $Revision$
 */

'use strict';

define([], function () {

	function CollapseController($scope) {
		console.debug("CollapseController");

  		$scope.isCollapsed = false;
  	  
		$scope.$apply();
	};

	return CollapseController;
});