const { expect } = require('chai');
const { mathEnforcer } = require('../4.MathEnforcer');

describe('mathEnforcer', () => {

    describe('Test mathEnforcer addFive functionallity', () => {
        it('Expect undefined on wrong input type', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        })
        it('Expect undefined on wrong input type', () => {
            expect(mathEnforcer.addFive({})).to.be.undefined;
        })
        it('Expect result after added 5 to input', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        })
        it('Expect result after added 5 to input', () => {
            expect(mathEnforcer.addFive(10)).to.equal(15);
        })
        it('Expect result after added 5 to input', () => {
            expect(mathEnforcer.addFive(1.01)).to.equal(6.01);
        })
        it('Expect result after added 5 to input', () => {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        })
    })

    describe('Test mathEnforcer subtract functionallity', () => {
        it('Expect undefined on wrong input type', () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        })
        it('Expect undefined on wrong input type', () => {
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        })
        it('Expect result after subtract it 10', () => {
            expect(mathEnforcer.subtractTen(10.1)).to.equal(0.09999999999999964);
        })
        it('Expect result after subtract it 10', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        })
        it('Expect result after subtract it 10', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        })
        it('Expect result after subtract it 10', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        })
    })

    describe('Test mathEnforcer sum functionallity', () => {
        it('Expect undefined on wrong input type', () => {
            expect(mathEnforcer.sum('5', 1)).to.be.undefined;
        })
        it('Expect undefined on wrong input type', () => {
            expect(mathEnforcer.sum(1, '1')).to.be.undefined;
        })
        it('Expect undefined on wrong input type', () => {
            expect(mathEnforcer.sum('1', '1')).to.be.undefined;
        })
        it('Expect should return sum result', () => {
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
        })
        it('Expect should return sum result', () => {
            expect(mathEnforcer.sum(5.5, 5.5)).to.equal(11);
        })
        it('Expect should return sum result', () => {
            expect(mathEnforcer.sum(-5, 5)).to.equal(0);
        })
        it('Expect should return sum result', () => {
            expect(mathEnforcer.sum(-5, -5)).to.equal(-10);
        })
        it('Expect should return sum result', () => {
            expect(mathEnforcer.sum(5.5, 5)).to.equal(10.5);
        })
        it('Expect should return sum result', () => {
            expect(mathEnforcer.sum(-5.5, -5.5)).to.equal(-11);
        })
        it('Expect should return sum result', () => {
            expect(mathEnforcer.sum({}, {})).to.be.undefined;
        })
    })
})