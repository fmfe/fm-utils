const { expect } = require('chai');

const { number } = require('..');

describe('lib: number', () => {
    describe('function: sumStrings', () => {
        it('字符串 "42329" 加上字符串 "21532" 等于 "63861"', done => {
            expect(number.sumStrings('42329', '21532')).to.equal('63861');
            done();
        });

        it('"843529812342341234" 加上 "236124361425345435" 等于 "1079654173767686669"', done => {
            expect(number.sumStrings('843529812342341234', '236124361425345435')).to.equal('1079654173767686669');
            done();
        });

        it('"12345678" 加上 "321" 等于 "12345999"', done => {
            expect(number.sumStrings('12345678', '321')).to.equal('12345999');
            done();
        });

        it('"12345678" 加上 "321" 等于 "12345999"', done => {
            expect(number.sumStrings('12345678', '98765432123456789')).to.equal('987654321357102467');
            done();
        });
    });
});
