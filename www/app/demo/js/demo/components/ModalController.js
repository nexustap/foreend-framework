
/* 模态框框的控制器定义
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-30
 * Version: $Revision$
 */

'use strict';

define([], function () {

	function ModalController($scope, $modal) {
		console.debug("ModalController");
    
		$scope.items = ['item1', 'item2', 'item3'];

		$scope.open = function () {
			console.debug("ModalController / open");

			$scope.modalsrc = 'myModalContent.html';
		};

		$scope.ok = function() {
			console.debug("ModalController / ok");

			$scope.result = $scope.selected;
			$('#myModal').modal('hide');
		};

		$scope.cancel = function () {
			console.debug("ModalController / cancel");
			
			$scope.result = '';
		    $('#myModal').modal('hide');
		};

		$scope.selected = {
		   item: $scope.items[0]
		};

		$scope.$apply();
	};

  return ModalController;
});