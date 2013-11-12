
/* 应用说明
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-28
 * Version: $Revision$
 */

'use strict';

define([], function(){

	var data = null;

	function setData(value) {
		data = value
	};

	function link(scope, elm, attrs) {
		if (attrs.appDesc == 'name') {
			elm.text(data.name);
		}
	};

	return {
		setData : setData,
		link : link
	};
})

