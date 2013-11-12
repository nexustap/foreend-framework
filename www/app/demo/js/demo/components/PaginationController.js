
/* 分页的控制器定义
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-30
 * Version: $Revision$
 */

'use strict';

define([], function () {

	function PaginationController($scope) {
		console.debug("PaginationController");
		
		$scope.totalItems = 64;	//总计条数
		$scope.currentPage = 4;	//当前页码
		$scope.maxSize = 7;	//当前最大页数
	
		$scope.setPage = function (pageNo) {
			console.debug("PaginationController / setPage");

			$scope.currentPage = pageNo;
		};

		$scope.bigTotalItems = 175;	//	总计条数
		$scope.bigCurrentPage = 1;	//当前页码

		$scope.numPages = 0;	//初始化当前页数，请勿修改。

		//获取当前页面
		$scope.$watch('bigCurrentPage', function() {
			console.debug("PaginationController / $watch(bigCurrentPage):" + $scope.bigCurrentPage);

			$scope.pageContent = "打开第 " + $scope.bigCurrentPage + "页内容";
		});

		$scope.$apply();
	};

	return PaginationController;
});