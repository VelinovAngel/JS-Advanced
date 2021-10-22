const { assert, expect } = require('chai');
const testNumbers = require('./03.TestNumbers.js');



describe("Tests the object that should have the following functionality", function () {
    describe("A function that accepts two parameters", function () {
        it("check if parameters are numbers", function () {
            expect(testNumbers.sumNumbers('a', 'a')).to.be.undefined;
            expect(testNumbers.sumNumbers(2, 'a')).to.be.undefined;
            expect(testNumbers.sumNumbers('a', 2)).to.be.undefined;
        });

        it("check if parameters are numbers", function () {
            expect(testNumbers.sumNumbers(2.00, 2)).to.equal('4.00');
            expect(testNumbers.sumNumbers(-2, -2)).to.equal('-4.00');
        });

        it("check if works with floating point", function () {
            expect(testNumbers.sumNumbers(1.5555, 2.1111)).to.equal('3.67');
        });

    });

    describe("A function that accepts a single parameter", function () {
        it("the function parses the input to number, and validates it", function () {
            expect(testNumbers.numberChecker('5')).to.contain('odd');
        });
        it("the function parses the input to number, and validates it", function () {
            expect(testNumbers.numberChecker(5)).to.contain('odd');
        });
        it("the function parses the input to number, and validates it", function () {
            expect(testNumbers.numberChecker(6)).to.contain('even');
        });
        it("the function parses the input to number, and validates it", function () {
            expect(testNumbers.numberChecker('6')).to.contain('even');
        });
        it("the function parses the input to number, and validates it", function () {
            expect(() => testNumbers.numberChecker('a')).to.throw();
        });
    });
    describe("averageSumArray", function () {
        it("check if the function iterates through each element in the array", function () {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });
        it("check if the function iterates through each element in the array", function () {
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
        });


    });
})
