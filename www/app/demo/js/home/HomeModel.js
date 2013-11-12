
/* 首页业务逻辑实现
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-11-05
 * Version: $Revision$
 */

'use strict';

define(['data/menus'], function (menus) {

	function HomeModel($http) {
		var _self = this;

		this.queryMenu = function() {
			return menus;
		};
	}

	return HomeModel;
});