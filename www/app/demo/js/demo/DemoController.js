
/* 演示的控制器定义
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-30
 * Version: $Revision$
 */

'use strict';

define([
	'demo/DemoModel'
	], function (DemoModel) {

		var helloworld = {
			title : 'Hi!Are you ready?',
			cookieValue : 'Hi! It\'s will cookies at here!'
		}

	    function DemoController($scope, jsonrpc, $window, $cookieStore) {
	        console.debug("DemoController");

	        var demoModel = new DemoModel(jsonrpc);

	        $scope.helloworld = initHelloworld();

	        function initHelloworld() {
	        	console.debug("DemoController / initHelloworld");

	        	var cookieValue = $cookieStore.get("cookieValue");
	        	if (cookieValue) {
	        		helloworld.cookieValue = "You had a cookie '"+cookieValue+"'!"
	        	};

	        	return helloworld;
	        };

	        $scope.clickMe = function() {
	        	console.debug("DemoController / clickMe");

	        	helloworld.title = demoModel.testFunc();
	        };

	        $scope.cookieMe = function() {
	        	console.debug("DemoController / cookieMe");

	        	var cookieValue = $scope.cookieValue;
	        	if (cookieValue) {
	        		$cookieStore.put("cookieValue", cookieValue); //设置cookie
	        		helloworld.cookieValue = "You set a cookie! Please refresh current page!"
	        	} else {
	        		$window.alert("请输入任意一个值！");
	        	}
	        };

	        $scope.displayCookie = function() {
	        	console.debug("DemoController / displayCookie");

	        	var cookieValue = $cookieStore.get("cookieValue");
	        	if (cookieValue) {
	        		helloworld.cookieValue = "Cookie is " + cookieValue;//读取cookie
	        	} else {
	        		helloworld.cookieValue = "Cookie is removed!";
	        	}
	        };

	        $scope.removeCookie = function() {
	        	console.debug("DemoController / removeCookie");

	        	$cookieStore.remove("cookieValue");
	        	helloworld.cookieValue = "You remove a cookie! Please refresh current page!"
	        };

	        $scope.fetchUrl = function() {
	        	demoModel.testJson(function(data, status) {
	        		$scope.data = data || "请求失败！";
        			$scope.status = status;
	        	});
	        }

	        $scope.$apply();
	    }

    	return DemoController;

});
