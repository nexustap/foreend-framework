
/* 应用说明
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-28
 * Version: $Revision$
 */

'use strict';

define([], function () {

    return ['appDesc', function () {
        return function (scope, elm, attrs) {
            console.log(attrs.appDesc);
			elm.text("当前版本" + appName + "");
        }
    }]
})