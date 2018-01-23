/**
 * @fileOverview 特殊字符工具库
 * @module characters
 */

/**
 * 检查是否包含特殊字符
 * @author   silenceboychen     https://github.com/silenceboychen
 * @param    {String}   characters         - 字符串
 *
 * @return   {Boolean}
 *
 * @example
 *
 * const { characters } = require('@fmfe/fm-utils');
 *
 * const b = characters.hasSpecialCharacters('213qaz@_&');
 *
 * console.log(b); // true
 */
exports.hasSpecialCharacters = function (characters) {
    // 匹配数字，字母和中文，如有特殊字符返回true
    const rules = /^[\d|A-z|\u4E00-\u9FFF]+$/;
    return !rules.test(characters);
};
