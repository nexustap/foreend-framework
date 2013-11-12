
/* 常用的工具函数
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: 2013-11-09
 * Copyright: asiainfo-linkage
 * Version: $Revision$
 */

define([],function(){

	var tools = {

		//检查并获取子对象
		getSubsFromObj : function(obj, key) {

			if (obj == undefined) {
				throw("对象未定义！");
			};

			if (obj[key] == undefined) {
				throw (key + "不存在！");
			};

			return obj[key];
		},

		//合并对象
		concatObj : function(src, dest) {

			for(var k in dest) {
				src[k] = dest[k];
			}

			return src;
		}
	}

	return tools;
})