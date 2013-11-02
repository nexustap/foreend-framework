/* 全局路由配置
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

define(['app'], function (app) {

	return app.config(['$routeProvider', function($routeProvider, $locationProvider) {
		$routeProvider.when('/home', {templateUrl: 'views/home/home.html', controller: 'tabsCtrl'});
  		$routeProvider.when('/system', {templateUrl: 'views/system/system.html', controller: 'tabsCtrl'});
  		$routeProvider.when('/device', {templateUrl: 'views/device/device.html', controller: 'tabsCtrl'});
  		$routeProvider.when('/application', {templateUrl: 'views/application/application.html', controller: 'tabsCtrl'});
  		$routeProvider.when('/report', {templateUrl: 'views/report/report.html', controller: 'tabsCtrl'});
  		$routeProvider.when('/tabs/:path', {templateUrl: 'views/home/tabs.html', controller: 'tabsCtrl'});
  		$routeProvider.when('/tabs/frame/:path', {templateUrl: 'views/home/tabs.html', controller: 'tabsCtrl'});
  		$routeProvider.otherwise({redirectTo: '/home'});
	}]);

});
