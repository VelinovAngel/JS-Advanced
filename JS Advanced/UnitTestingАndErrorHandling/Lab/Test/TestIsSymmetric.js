const { expect } = require('chai');
const isSymmetric = require('../5.CheckForSymmetry');

describe('Symmetric checker', () => {
    it('returns true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    })

    it('returns false for non-symmetric arrat', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    })

    it('returns false for non array', () => {
        expect(isSymmetric(5)).to.be.false;
    })

    it('Should return false', function () {
        expect(isSymmetric('invalid date')).to.be.equal(false);
    });

    it('Should return true', function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });

    it('Should return true', function () {
        expect(isSymmetric([])).to.be.equal(true);
    });

    it('Should return true', function () {
        expect(isSymmetric(['1','2','1'])).to.be.equal(true);
    });

    it('Should return true', function () {
        expect(isSymmetric([1,'str',{x:5},new Date(),{x:5},'str',1])).to.be.equal(true);
    });
})