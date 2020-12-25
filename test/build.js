const assert = require('assert'), randomid = require('lib/randomid')
describe('Webin_Randomid By Kraivit', () => {
    describe('#Tester Parameter', () => {
        context('Function Generateid', function () {
            console.log(randomid.generateid('base62', 10))
                it('base62', function () {
                    assert(randomid.generateid('base62', 10))
                });
                it('base36', function () {
                    assert(randomid.generateid('base62', 10))
                });
                it('base10', function () {
                    assert(randomid.generateid('base62', 10))
                });
        })
    })
})