const { expect } = require('chai');

const { email } = require('..');

describe('lib: email', () => {
    describe('function: isValid', () => {
        it('should return true if email is valid', done => {
            expect(email.isValid('123456@qq.com')).to.equal(true);
            expect(email.isValid('123456_wddas@qq.com')).to.equal(true);
            done();
        });
        it('should return false if email is invalid', done => {
            expect(email.isValid('_whejq1@qq.com')).to.equal(false);
            expect(email.isValid('dalnksdnlakw')).to.equal(false);
            expect(email.isValid('123@qq.com_')).to.equal(false);
            done();
        });
    });
});
