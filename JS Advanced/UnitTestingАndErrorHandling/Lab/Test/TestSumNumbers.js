const { expect } = require('chai');
const sum = require('../Lab/04.SumNumbers');

describe('Demo test', () => {
    it('works with 5 and 3', () => {
        expect(sum(['5', '3'])).to.equal(8);
    });
    it('Should return 0 ', () => {
        expect(sum([])).to.be.equal(0);
    });

    it('Should return NaN', () => {
        expect(sum('invalid date')).to.be.NaN;
    });

    it('Should return 7', () => {
        expect(sum([1.5, 4, 3, -1.5])).to.be.equal(7);
    });

    it('Should return [1]', () => {
        expect(sum([1])).to.be.equal(1);
    });
});