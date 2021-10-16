let expect = require('chai').expect;

const rgbToHexColor = require('../Lab/6.RGBToHex');


describe('RGB number to Hex as string', () => {
    it('return undefined when number is < 0', () => {
        expect(rgbToHexColor(-2, -3, -5)).to.be.undefined;
    });

    it('return undefined when number is > 255', () => {
        expect(rgbToHexColor(256, 270, 310)).to.be.undefined;
    });

    it('return undefined when input is char', () => {
        expect(rgbToHexColor('a', 'b', 'c')).to.be.undefined;
    });

    it('return undefined when input is not a number', () => {
        expect(rgbToHexColor('1', '2', '3')).to.be.undefined;
    });

    it('return undefined when number is not integer', () => {
        expect(rgbToHexColor(2.2)).to.be.undefined;
    });

    it('cover black to hex', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('cover white to hex', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('cover red to hex', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    });

    it('cover green to hex', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });

    it('cover blue to hex', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });

});
