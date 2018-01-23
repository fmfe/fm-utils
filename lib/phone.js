/**
 * @fileOverview 电话号码工具库
 * @module phone
 */

const googleLibPhoneNumber = require('google-libphonenumber');

const phoneUtil = googleLibPhoneNumber.PhoneNumberUtil.getInstance();
const codeMap = googleLibPhoneNumber.metadata.countryCodeToRegionCodeMap;

/**
 * 检查电话号码是否有效
 * @author   modood     https://github.com/modood
 * @param    {String}   phoneNumber         - 电话号码
 * @param    {String}   [countryCode=86]    - 地区码（默认：86，表示中国，关于
 *                                            <a href="https://zh.wikipedia.org/wiki/国际电话区号列表">国际电话区号列表</a>）
 * @return   {Boolean}
 *
 * @example
 *
 * const { phone } = require('@fmfe/fm-utils');
 *
 * const b = phone.isValid(13800138000, 86);
 *
 * console.log(b); // true
 */
exports.isValid = function (phoneNumber, countryCode) {
    if (!countryCode) countryCode = '0086';
    if (!+countryCode) return false;

    const regions = codeMap[+countryCode];
    let valid = false;

    for (let i = 0; i < regions.length; i++) {
        const r = regions[i];
        const n = phoneUtil.parseAndKeepRawInput(phoneNumber.toString(), r.toString());
        if (phoneUtil.isValidNumber(n)) {
            valid = true;
            break;
        }
    }
    return valid;
};
