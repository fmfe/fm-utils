const { expect } = require('chai');

const { phone } = require('..');

describe('lib: phone', () => {
    describe('function: isValid', () => {
        it('should work with default country code', done => {
            // Number: China
            // Code: Default 86 (China)
            expect(phone.isValid(13800138000)).to.equal(true);
            expect(phone.isValid(8613800138000)).to.equal(true);

            expect(phone.isValid(1273257554)).to.equal(false);
            expect(phone.isValid(441273257554)).to.equal(false);

            done();
        });
        it('should return false if country code is invalid', done => {
            expect(phone.isValid(13800138000, 'invalid country code')).to.equal(false);

            expect(phone.isValid(4322391750, {})).to.equal(false);
            expect(phone.isValid(4322391750, [])).to.equal(false);
            expect(phone.isValid(4322391750, true)).to.equal(false);

            done();
        });
        it('should return all true for valid number', done => {
            // China
            expect(phone.isValid(13800138000, 86)).to.equal(true);
            expect(phone.isValid(8613800138000, 86)).to.equal(true);
            expect(phone.isValid(13800138000, 'CN')).to.equal(true);
            expect(phone.isValid(8613800138000, 'CN')).to.equal(true);

            // United Kingdom
            expect(phone.isValid(1273257554, 44)).to.equal(true);
            expect(phone.isValid(441273257554, 44)).to.equal(true);
            expect(phone.isValid(1273257554, 'GB')).to.equal(true);
            expect(phone.isValid(441273257554, 'GB')).to.equal(true);

            // United States
            expect(phone.isValid(4322391750, 1)).to.equal(true);
            expect(phone.isValid(14322391750, 1)).to.equal(true);
            expect(phone.isValid(4322391750, 'US')).to.equal(true);
            expect(phone.isValid(14322391750, 'US')).to.equal(true);

            // Canada
            expect(phone.isValid(8252504025, 1)).to.equal(true);
            expect(phone.isValid(18252504025, 1)).to.equal(true);
            expect(phone.isValid(4322391750, 'CA')).to.equal(true);
            expect(phone.isValid(14322391750, 'CA')).to.equal(true);

            done();
        });

        it('should return all false for wrong country code', done => {
            // Number: China
            // Code: United Kingdom
            expect(phone.isValid(13800138000, 44)).to.equal(false);
            expect(phone.isValid(13800138000, 44)).to.equal(false);
            expect(phone.isValid(8613800138000, 'GB')).to.equal(false);
            expect(phone.isValid(8613800138000, 'GB')).to.equal(false);

            // Number: United Kingdom
            // Code: United States or Canada ...
            expect(phone.isValid(1273257554, 1)).to.equal(false);
            expect(phone.isValid(441273257554, 1)).to.equal(false);
            expect(phone.isValid(1273257554, 'US')).to.equal(false);
            expect(phone.isValid(441273257554, 'US')).to.equal(false);

            // Number: United States
            // Code: China
            expect(phone.isValid(4322391750, 86)).to.equal(false);
            expect(phone.isValid(14322391750, 86)).to.equal(false);
            expect(phone.isValid(4322391750, 'CN')).to.equal(false);
            expect(phone.isValid(14322391750, 'CN')).to.equal(false);

            // Number: Canada
            // Code: China
            expect(phone.isValid(8252504025, 886)).to.equal(false);
            expect(phone.isValid(18252504025, 886)).to.equal(false);
            expect(phone.isValid(8252504025, 'TW')).to.equal(false);
            expect(phone.isValid(18252504025, 'TW')).to.equal(false);

            done();
        });
    });
});
