const add = require('../lib/calc-add');
const { expect } = require('chai');

describe('大数计算', () => {
    describe('function add', () => {
        it('字符串"42329"加上字符串"21532"等于"63861"', done => {
            expect(add('42329', '21532')).to.equal('63861');
            done();
        });

        it('"843529812342341234"加上"236124361425345435"等于"1079654173767686669"', done => {
            expect(add('843529812342341234', '236124361425345435')).to.equal('1079654173767686669');
            done();
        });
    });
});
