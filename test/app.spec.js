const { add, sub } = require('../src/app');
const expect = require('chai').expect;

//BDD
describe('suite 1', () => {
    it('add(2, 3) should return 5', () => {
        expect(add(2, 3)).to.be.equal(5);
    })
});

context('suite 2', () => {
    specify('add(3, 3) should return 6', () => {
        expect(add(3, 3)).to.be.equal(6);
    })
});

//TDD
const { suite, test } = require('mocha');

suite('suite 3', () => {
    test('add(3, 3) should return 6', () => {
        expect(add(3, 3)).to.be.equal(6);
    })
});