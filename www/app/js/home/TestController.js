
/*
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-30
 * Version: $Revision$
 */

'use strict';

define([
	'home/TestModel'
	], function (TestModel) {

		console.log(TestModel);

		var testModel = new TestModel();

	    function TestController($scope, $location, $cookies) {
	        console.debug("TestController");
	        console.log(testModel.test());

	        $cookies.text = 'Hi! Here is cookies'; //设置cookie

	        $scope.cookieValue = $cookies.text;	//读取cookie

	        $scope.helloworld = {
	        	title : testModel.test()
	        }

	        $scope.$apply();
	    }

    	return TestController;

});
