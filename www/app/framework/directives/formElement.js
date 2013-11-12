
/* 表单元素
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-11-08
 * Version: $Revision$
 */

'use strict';

define([], function(){

	function link(scope, elm, attrs) {
		if (attrs.appDesc == 'name') {
			elm.text(data.name);
		}
	};

	return {
		link : link
	};
})

