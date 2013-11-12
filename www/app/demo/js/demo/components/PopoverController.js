
/* 弹出框的控制器定义
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-30
 * Version: $Revision$
 */

'use strict';

define([], function () {

	function PopoverController($scope) {
	console.debug("PaginationController");
	
		$scope.dynamicPopover = "此处是内容";
		$scope.dynamicPopoverText = "动态弹出";
		$scope.dynamicPopoverTitle = "标题";

		$scope.$apply();
	};

	return PopoverController;
});