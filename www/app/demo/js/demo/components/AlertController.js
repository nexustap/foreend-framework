
/* 警告的控制器定义
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-30
 * Version: $Revision$
 */

'use strict';

define([], function () {

	function AlertController($scope) {
		console.debug("AlertController");

	  	$scope.alerts = [
			{ type: 'success', msg: '成功！' }, 
			{ type: 'info', msg: '信息！' },
			{ type: 'danger', msg: '危险！' }
		];

		//添加警告
	  	$scope.addAlert = function() {
			$scope.alerts.push({type: "warning", msg: "警告!"});
		};

		//关闭警告
		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
	  	};

		$scope.$apply();
	}

	return AlertController;
});