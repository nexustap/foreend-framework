
/* 全局controller配置。
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

define([], function(){

	var dependencies;

	function setDependencies(value) {
		dependencies = value;
	}

	function register(controllers, controllerName, controllerPath) {

		var newControllers = controllers.controller(controllerName, function($scope, $injector) {
				require([controllerPath], function(controllerName) {
					$injector.invoke(controllerName, this, {'$scope': $scope});
				});
			});

		return newControllers;
	}

	function load() {

		var controllers = angular.module('controllers', []);


		for(var key in dependencies) {

			var controllerName = key,
				controllerPath = dependencies[key];

			var controllers = register(controllers, controllerName, controllerPath);
			
		}
		
		return controllers;
	}

	return {
		setDependencies : setDependencies,
		load : load
	}
});