
/* 下拉菜单的控制器定义
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-30
 * Version: $Revision$
 */

'use strict';

define([], function () {

	function DropdownController($scope, $timeout) {
		console.debug("DropdownController");
		
		$scope.items = [
			{title: "菜单一", msg: "你选择了菜单一"},
			{title: "菜单二", msg: "你选择了菜单二"},
			{title: "菜单三", msg: "你选择了菜单三"},
		];

		$scope.msg = '请选择菜单';

		$scope.clickMenu = function(msg) {
			console.debug("DropdownController / clickMenu");
			
			$scope.msg = msg;
		}

		$scope.$apply();
	};

	return DropdownController;
});