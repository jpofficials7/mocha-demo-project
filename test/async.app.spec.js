const expect = require('chai').expect;
const axios = require('axios');

//BDD
describe.only('async test suite', function(){

    it.skip('promised based way', () => {
        this.timeout(100);
        return axios.get('https://reqres.in/api/users/2').then(res => {
            expect(res.data.data.email).to.be.equal('janet.weaver@reqres.int');
        })
    });

    it('done based way', (done) => {
        axios.get('https://reqres.in/api/users/2').then(res => {
            expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in');
            done();
        }).catch(err => {
            done(err);
        })
    });
    it.skip('async await based way', async () => {
        const res = await axios.get('https://reqres.in/api/users/2');
        expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in');
    });
})

describe('async test suite', function(){

    it('promised based way', () => {
        this.timeout(100);
        return axios.get('https://reqres.in/api/users/2').then(res => {
            expect(res.data.data.email).to.be.equal('janet.weaver@reqres.int');
        })
    });

    it('done based way', (done) => {
        axios.get('https://reqres.in/api/users/2').then(res => {
            expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in');
            done();
        }).catch(err => {
            done(err);
        })
    });
    it('async await based way', async () => {
        const res = await axios.get('https://reqres.in/api/users/2');
        expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in');
    });
})

//TDD
