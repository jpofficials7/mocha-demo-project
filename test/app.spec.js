const { add, sub } = require('../src/app');
const expect = require('chai').expect;

//BDD
describe('suite 1', () => {
    afterEach(() => {
        console.log('afterEach');
    });
    beforeEach(() => {
        console.log('beforeEach');
    });
    after(() => {
        console.log('after');
    });
    before(() => {
        console.log('before');
    })
    it('add(2, 3 should return 5', () => {
        console.log('it');
    });
    it('two', () => {
        console.log('it two');
    });
})

describe('suite 2', () => {
    suiteSetup(() => {
        console.log('suiteSetup');
    });
    suiteTeardown(() => {
        console.log('suiteTeardown');
    });
    setup(() => {
        console.log('setup');
    });
    teardown(() => {
        console.log('teardown');
    })
    test('add(2, 3 should return 5', () => {
        console.log('it');
    });
    test('two', () => {
        console.log('it two');
    });
})

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