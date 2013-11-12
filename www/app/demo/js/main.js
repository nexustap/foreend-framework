
/* 应用程序启动文件
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-11-07
 * Version: $Revision$
 */

'use strict';

require([
    'config/base',
    '../../framework/global'
],function(base, framework) {

    framework.setBaseConfig(base);
    framework.start();

});
