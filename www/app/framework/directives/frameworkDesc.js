
/* 框架说明
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-11-04
 * Version: $Revision$
 */


'use strict';

define([], function(){

	var data = null;

	function setData(value) {
		data = value
	};

	function link(scope, elm, attrs) {
		if (attrs.frameworkDesc == 'name') {
			elm.text("本产品由" + data.name + "驱动");
		}
	}

	return {
		setData : setData,
		link : link
	};
})
