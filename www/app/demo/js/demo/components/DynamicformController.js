
/* 动态表单
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-11-08
 * Version: $Revision$
 */


'use strict';

define([], function (FormelementsModel) {

	function DynamicformController($scope) {
		console.debug("DynamicformController");

		$scope.elements = {};

		//接受子层controller的参数
		$scope.$on('resultEvent', function(even, data){
			console.debug("DynamicformController / $on('resultEvent')");
			$scope.elements = data;
		})

		$scope.getFormValue = function() {
			console.debug("DynamicformController / getFormValue");

			$scope.result = $scope.elements;
		};

		$scope.displayLocalForm = function() {
			console.debug("DynamicformController / displayLocalForm");

			//在下层controller的html标签中使用ng-model，传递参数给下层controller
			$scope.params = {
					method : 'localElements',
					data : [{id: "1",value: "111"}]
				};
		};

		$scope.displayRemoteForm = function() {
			console.debug("DynamicformController / displayRemoteForm");
			
			//在下层controller的html标签中使用ng-model，传递参数给下层controller
			$scope.params = {
					method : 'remoteElements',
					data : [{id: "1",value: "222"}]
				};
		};
		$scope.displayLocalForm();
		
		$scope.$apply();
	}

	return DynamicformController;
});