/**
 * @fileOverview 大数相加
 * @module calcAdd
 */

/**
 * 检查邮箱是否有效
 * @author   ...
 * @param    {String, String}   add         - 大数相加
 *
 * @return   {String}
 *
 * @example
 *
 * const { calcAdd } = require('@fmfe/fm-utils');
 *
 * const b = calcAdd.add('42329', '21532');
 *
 * console.log(b); // 63861
 *
 *
 * const b = calcAdd.add('843529812342341234', '236124361425345435');
 *
 * console.log(b); // 1079654173767686669
 */
function sumStrings (a, b) {
    a = '0' + a; // 加0是因为两个最大的位数相加后可能需要进位
    b = '0' + b;

    const arrA = a.split(''); // 将数字转成字符串
    const arrB = b.split('');
    let res = [];
    let temp = '';
    let carry = 0;

    const distance = a.length - b.length; // 计算两个数值字符串的长度差
    const len = distance > 0 ? a.length : b.length;

    // 在长度小的那个数值字符串前面添加distance个0，这样两个数值的位数就保持一致，
    // 如：9797979797、34646，需要将这两个数值转成['0','9','7','9','7','9','7','9','7','9','7']、['0','0','0','0','0','3','4','6','4','6']
    if (distance > 0) {
        for (let i = 0; i < distance; i++) {
            arrB.unshift('0');
        }
    } else {
        for (let i = 0; i < Math.abs(distance); i++) {
            arrA.unshift('0');
        }
    }

    // 从数组的最后一位开始向前遍历，把两个数组对应位置的数值字符串转成整形后相加，
    // carry表示相加后的进位，比如最后一位相加是7+6=13，这里进位carry是1
    // 在遍历的时候每次都加上上次相加后的carry进位
    for (let i = len - 1; i >= 0; i--) {
        temp = +arrA[i] + (+arrB[i]) + carry;
        if (temp > 10) {
            carry = 1;
            res.push((temp + '')[1]);
        } else {
            carry = 0;
            res.push(temp);
        }
    }

    res = res.reverse().join('').replace(/^0/, '');
    return res;
}

function add () {
    return sumStrings(arguments[0], arguments[1]);
}

module.exports = add;
