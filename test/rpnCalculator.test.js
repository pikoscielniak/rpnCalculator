var expect = require('chai').expect;
var _ = require('lodash');

var rpnCalculator = require('../rpnCalculator');

describe('rpnCalculator', function () {

    describe("calculate", function () {

        it("expression '2 3 +' returns 5", function () {
            var expr = "2 3 +";
            var result = rpnCalculator.calculate(expr);

            expect(result).to.equal(5)
        });

        it("expression '4 4 + 2 *' returns 16", function () {
            var expr = "4 4 + 2 *";
            var result = rpnCalculator.calculate(expr);

            expect(result).to.equal(16)
        });

        it("expression '5 5 * 5 + 10 - 4 /' returns 5", function () {
            var expr = "5 5 * 5 + 10 - 4 /";
            var result = rpnCalculator.calculate(expr);

            expect(result).to.equal(5)
        });

        it("expression 'a to 1, b to 2 +' returns 3", function () {
            var expr = "a to 1, b to 2 +";
            var result = rpnCalculator.calculate(expr);

            expect(result).to.equal(3)
        });

        it("expression 'ABC 4 DEF8 -' returns -4", function () {
            var expr = "ABC 4 DEF8 -";
            var result = rpnCalculator.calculate(expr);

            expect(result).to.equal(-4)
        });
    });
});