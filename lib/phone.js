/**
 * @fileOverview 电话号码工具库
 * @module phone
 */

const PhoneNumber = require('awesome-phonenumber');

/**
 * 检查电话号码是否有效
 * @author   modood     https://github.com/modood
 * @param    {String}   phoneNumber         - 电话号码
 * @param    {String}   [code=86]    - 地区码，支持数字或英文简写（默认：86 或 CN，表示中国）
 *                                            关于<a href="https://en.wikipedia.org/wiki/List_of_country_calling_codes">国际电话区号列表</a>）
 * @return   {Boolean}
 *
 * @example
 *
 * const { phone } = require('@fmfe/fm-utils');
 *
 * phone.isValid(13800138000, 86);      // true
 * phone.isValid(8613800138000, 86);    // true
 * phone.isValid(13800138000, 'CN');    // true
 * phone.isValid(8613800138000, 'CN');  // true
 *
 * phone.isValid(4322391750, 1);        // true
 * phone.isValid(14322391750, 1);       // true
 * phone.isValid(4322391750, 'US');     // true
 * phone.isValid(14322391750, 'US');    // true
 *
 * phone.isValid(13800138000, 1);       // false
 * phone.isValid(13800138000, 'US');    // false
 * phone.isValid(14322391750, 86);      // false
 * phone.isValid(14322391750, 'CN');    // false
 */
exports.isValid = function (phoneNumber, code) {
    if (code === undefined) code = 86;

    if (!code || (typeof code !== 'string' && typeof code !== 'number')) return false;

    const countryCode = +code;
    let regionCode = code;

    if (countryCode) {
        regionCode = PhoneNumber.getRegionCodeForCountryCode(+countryCode);
    }

    const p = new PhoneNumber(phoneNumber.toString(), regionCode);

    return p.isValid();
};
