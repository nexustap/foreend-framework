
/* 动态表单
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-11-08
 * Version: $Revision$
 */


'use strict';

define([
	'demo/components/FormelementsModel'
], function (FormelementsModel) {

	function FormelementsController($scope, jsonrpc) {
		console.debug("FormelementsController");

		var model = new FormelementsModel(jsonrpc);

		//通过使用ng-model，接受上层controller传递参数
		$scope.$watch('params',function(){
			console.debug("FormelementsController / $watch('params')");

			var params = $scope.params;

			if (params == undefined) { return };

			if (params.method == 'localElements') {
				$scope.localElements(params.data);

			} else if (params.method == 'remoteElements') {
				$scope.remoteElements(params.data);
			}
		});

		$scope.localElements = function(value) {
			console.debug("FormelementsController / localElements");

			var elements = model.queryLocal();

			setValue(elements, value);

			//将结果传递到上层controller
			//可以用$rootScope=elements通过注册到根上面，返回到上层controller。
			//上层必须也通过$rootScope来获取。此种方法不建议使用。
			$scope.$emit('resultEvent',elements);
		};
		
		$scope.remoteElements = function(value) {
			console.debug("FormelementsController / remoteElements");

			var params = {
				specId : '1023500002',
				domainId : 'domainId'
			}

			model.queryRemote(params, function(data, status){

				if (status == 1) {

					var elements = [];
					for(var i in data.strList) {
						var row = data.strList[i];
						elements.push(element(i, row.name, row.name, row.controlCode))
					}

					setValue(elements, value);

					//将结果传递到上层controller
					$scope.$emit('resultEvent',elements);
				} else {
					console.debug(data)
				}

			});
		};

		//生成元素
		function element(id, label, placeholder, type) {
			return {id:id, label:label, placeholder:placeholder, type:type};
		};

		//给元素设置初始值
		function setValue(elements, value) {

			if (elements && value) {
				for(var i in elements) {
					var element = elements[i];

					//查找并初始化value
					jQuery.grep(value, function(obj, i){
						if (obj.id == element.id) {
							elements[i].value = obj.value;
						};
					});
				}
			};

			return elements;
		};

		$scope.$apply();
	}

	return FormelementsController;
});