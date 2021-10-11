const { expect } = require('chai');
const isOddOrEven = require('/Exercise/2.EvenOrOdd').isOddOrEven;

describe('Even od odd checker', () => {
    it('Should return undefined if not a string', () => {
        expect(isOddOrEven({name: 'gosho'})).to.be.undefined;
    })

    it('Should return undefined if not a string', () => {
        expect(isOddOrEven([])).to.be.undefined;
    })

    describe('Check if should return even or odd', () => {
        it('Should return even', () => {
            expect(isOddOrEven('even')).to.equal('even');
        })
    
        it('Should return odd', () => {
            expect(isOddOrEven('odd')).to.equal('odd');
        })
    })
})