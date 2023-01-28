const assert = require('chai').assert;
const add = require('../app/calculator').add;
const mul = require('../app/calculator').mul;
const div = require('../app/calculator').div;
const sub = require('../app/calculator').sub;


describe('App', function () {

    describe('Addition', function () {

        it('add(5, 2) expected result 7 PASS', function () {
            let result = add(5, 2)
            assert.equal(result, 7)
        })

        it('add(5,2) expected result 8 FAIL', function () {
            let result = add(5, 2)
            assert.equal(result, 8)
        })

    })

    describe('Subtraction', function () {

        it('sub(5, 2) expected result 3 PASS', function () {
            let result = sub(5, 2)
            assert.equal(result, 3)
        })

        it('sub(5,2) expected result 5 FAIL', function () {
            let result = sub(5, 2)
            assert.equal(result, 5)
        })

    })


    describe('Multiplication', function () {

        it('mul(5, 2) expected result 10 PASS', function () {
            let result = mul(5, 2)
            assert.equal(result, 10)
        })

        it('mul(5,2) expected result 12 FAIL', function () {
            let result = mul(5, 2)
            assert.equal(result, 12)
        })

    })


    describe('Division', function () {

        it('div(10, 2) expected result 5 PASSs', function () {
            let result = div(10, 2)
            assert.equal(result, 5)
        })

        it('div(10,2) expected result 2 FAIL', function () {
            let result = div(10, 2)
            assert.equal(result, 2)
        })

    })

})