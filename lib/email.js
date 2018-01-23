/**
 * @fileOverview 邮箱工具库
 * @module email
 */

/**
 * 检查邮箱是否有效
 * @author   silenceboychen     https://github.com/silenceboychen
 * @param    {String}   email         - 邮箱地址
 *
 * @return   {Boolean}
 *
 * @example
 *
 * const { email } = require('@fmfe/fm-utils');
 *
 * const b = email.isValid('123456@qq.com');
 *
 * console.log(b); // true
 */
exports.isValid = function (email) {
    const rules = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+\.){1,63}[a-z0-9]+$/;
    return rules.test(email);
};
