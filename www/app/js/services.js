
/* 定义全局变量
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

define(['angular'], function () {
	
	angular.module('itspApp.services', [])

		.value('appDesc', {
			'name' : 'ITSP 3.0'
		})
		
		.value('frameworkDesc', {
			'name' : 'foreend.framework 0.2'
		});
});