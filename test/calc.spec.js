const { myCalc } = require('../src/calc');
const expect = require('chai').expect;

describe('Basic Tests', () => {
    it.only('sum - should return correct output with positive values', () => {
        //Arrange - Nothing required in our case
        //Act
        const result = myCalc.sum(2, 3);
        //Assert
        expect(result).to.be.equal(5);//chai

    });
    it('sum - should return correct output with negative values', () => {
        const result = myCalc.sum(-2, -3);
        expect(result).to.be.equal(-5);//chai
    });
    it('div - should return correct value', () => {
        const result = myCalc.div(4, 2);
        expect(result).to.equal(2);
    })
    it('div - should return infinity', () => {
        const result = myCalc.div(2, 0);
        expect(result).to.equal(Infinity);
    })
})