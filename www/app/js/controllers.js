
/* 全局controller配置。
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

define(['angular', 'services'], function () {
	angular.module('itspApp.controllers', ['itspApp.services'])

		/*=================================================================
		 * 主页面的控制器配置
		 ==================================================================*/
		// 主页面的controller，请勿修改。
		.controller('homeCtrl', function($scope, $injector) {//定义controller
			require(['home/HomeController'], function(HomeController) {	//js文件指向controller文件，并注入controller
				$injector.invoke(HomeController, this, {'$scope': $scope});	//调用controller
			});
		})
		// 主页顶部导航controller配置
		.controller('homeNavCtrl', function($scope, $injector) {
			require(['home/HomeNavController'], function(HomeNavController) {
				$injector.invoke(HomeNavController, this, {'$scope': $scope});
			});
		})
		// 主页边栏导航controller配置
		.controller('homeSideCtrl', function($scope, $injector) {
			require(['home/HomeSideController'], function(HomeSideController) {
				$injector.invoke(HomeSideController, this, {'$scope': $scope});
			});
		})
		//主页内容的controller配置
		.controller('homeContentCtrl', function($scope, $injector) {
			require(['home/HomeContentController'], function(HomeContentController) {
				$injector.invoke(HomeContentController, this, {'$scope': $scope});
			});
		})

		//tab的controller配置
		.controller('tabsCtrl', function($scope, $injector) {
			require(['home/HomeTabsController'], function(HomeTabsController) {
				$injector.invoke(HomeTabsController, this, {'$scope': $scope});
			});
		})

		/*===================================================================
		 * 系统管理的控制器配置
		 ====================================================================*/

		//系统管理的controller配置
		.controller('systemCtrl', function($scope, $injector) {
			require(['system/SystemController'], function(SystemController) {
				$injector.invoke(SystemController, this, {'$scope': $scope});
			});
		})

		/*===================================================================
		 * 设备管理的控制器配置
		 ====================================================================*/
		
		//设备管理的controller配置
		.controller('deviceCtrl', function($scope, $injector) {
			require(['device/DeviceController'], function(DeviceController) {
				$injector.invoke(DeviceController, this, {'$scope': $scope});
			});
		})

		/*===================================================================
		 * 应用管理的控制器配置
		 ====================================================================*/
		
		//应用管理的controller配置
		.controller('applicationCtrl', function($scope, $injector) {
			require(['application/ApplicationController'], function(ApplicationController) {
				$injector.invoke(ApplicationController, this, {'$scope': $scope});
			});
		})

		/*===================================================================
		 * 报表管理的控制器配置
		 ====================================================================*/

		//报表管理的controller配置
		.controller('reportCtrl', function($scope, $injector) {
			require(['report/ReportController'], function(ReportController) {
				$injector.invoke(ReportController, this, {'$scope': $scope});
			});
		})

		/*===================================================================
		 * 测试的控制器配置
		 ====================================================================*/
		//test的controller配置
		.controller('testCtrl', function($scope, $injector) {
			require(['home/TestController'], function(TestController) {
				$injector.invoke(TestController, this, {'$scope': $scope});
			});
		})
});