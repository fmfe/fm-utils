const { expect } = require('chai');

const { characters } = require('..');

describe('lib: characters', () => {
    describe('function: hasSpecialCharacters', () => {
        it('should return true if have special characters', done => {
            expect(characters.hasSpecialCharacters('121qaz@_')).to.equal(true);
            expect(characters.hasSpecialCharacters('&^12121')).to.equal(true);
            expect(characters.hasSpecialCharacters('你好！')).to.equal(true);
            done();
        });
        it('should return false if there are no special characters', done => {
            expect(characters.hasSpecialCharacters('123455')).to.equal(false);
            expect(characters.hasSpecialCharacters('qazwsc')).to.equal(false);
            expect(characters.hasSpecialCharacters('你好')).to.equal(false);
            done();
        });
    });
});
