const { myCalc } = require('../src/calc');
const expect = require('chai').expect;
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

describe.skip('spy calculator method callback tests', () => {
    it('myCalc - should call callback once', () => {
        //Arrange
        const spy = sinon.spy();
        //Act
        myCalc.myCalc(1, 2, spy);
        //Assert
        sinon.assert.calledOnce(spy);//sinon assertion
        myCalc.myCalc(1, 2, spy);
        //Assert
        sinon.assert.calledTwice(spy);//sinon assertion
        sinon.assert.calledWithExactly(spy, 10, 2);
    });
});

describe.skip('spy calculator method callback tests', () => {
    let spy;
    beforeEach(() => {
        spy = sinon.spy(myCalc, 'sum');
    });
    afterEach(() => {
        spy.restore();
    });
    it('sum - should call sum once with args 1 and 2', () => {
        //Arrange
        const spy = sinon.spy(myCalc, 'sum');
        //Act
        myCalc.sum(1, 2);
        //Assert
        sinon.assert.calledOnce(spy);//sinon assertion
        sinon.assert.calledWith(spy, 1, 2);
    });
    it('sum - should call sum once with args 10 and 20', () => {
        //Arrange
        const spy = sinon.spy(myCalc, 'sum');
        //Act
        myCalc.sum(10, 20);
        //Assert
        sinon.assert.calledOnce(spy);//sinon assertion
        sinon.assert.calledWith(spy, 10, 20);
    });
});

describe('spy calculator property getter and setter tests', () => {
    let spy;
    beforeEach(() => {
        spy = sinon.spy(myCalc, 'calc', ['get', 'set']);
    });
    afterEach(() => {
        spy.restore();
    });
    it('sum - should call sum once with args 1 and 2', () => {
        expect(myCalc.calc).to.equal("casio");
        sinon.assert.calledOnce(spy.get);
        //Act
        myCalc.calc = 'Genuine';
        //Assert
        sinon.assert.calledOnce(spy.set);
    });
});