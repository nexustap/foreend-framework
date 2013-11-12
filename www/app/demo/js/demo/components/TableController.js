
/* 表格的控制器定义
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-30
 * Version: $Revision$
 */

'use strict';

define([
	'jqGrid'
], function () {

	function TableController($scope) {
		console.debug("TableController");

		//在下层controller的html标签中使用ng-model，传递参数给下层controller
		$scope.params = {
			method : 'localElements',
			data : [{id: "1",value: "111"}]
		};

		//接受子层controller的参数
		$scope.$on('resultEvent', function(even, data){
			console.debug("TableController / $on('resultEvent')");
			$scope.elements = data;
		})

		$scope.query = function() {
			var elements = $scope.elements;

			for(var i=0;i<=elements.length;i++) {
				jQuery("#list4").jqGrid('delRowData', i+1);
				jQuery("#list4").jqGrid('addRowData',i+1,elements[i]);
			};
		}

		jQuery("#list4").jqGrid({
			datatype: "local",
			height: 210,
			width: 600,
			colNames:['序号','名称', '类型', '输入值'],
			pager: '#pager4',
			viewrecords: true,
			colModel:[
				{name:'id',index:'id', width:60, sorttype:"int"},
				{name:'label',index:'label', width:90},
				{name:'type',index:'type', width:90},
				{name:'value',index:'value', width:80, align:"left"},
			],
			rows:[{id: "1", label : "输入一", placeholder: "输入一", type: "text"}],
			multiselect: true,
			caption: "测试表单"
		});

		jQuery("#list4").jqGrid('navGrid',"#pager4",{edit:false,add:false,del:false});

		$scope.$apply();
	}

	return TableController;
});