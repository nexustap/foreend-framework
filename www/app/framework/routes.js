/* 全局路由配置
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

define([], function () {

	var routes;

	function setRoutes(value) {
		routes = value;
	}

	function start(app) {
		app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider, $rootScope) {

			for (var key in routes) {
				var route = routes[key];
				if (route["redirectTo"]) {
					$routeProvider.otherwise(route);
				} else {
					$routeProvider.when(route['url'], route['config']);
				}
			}
		}]);
	}

	return {
		setRoutes: setRoutes,
		start:start
	};
});
