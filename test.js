const operations = require('./operations.js')
const assert = require('assert');

// it('unit testing tutorial working', () => {
//     assert.equal(true, true)
// })

// checking if correctly calculates numbers
it('Test is correctly calculating the sum of 3 and 5', () => {
    assert.equal(operations.add(3, 5), 8)
})

it('Test is correctly calculating the sum of -13 and -5', () => {
    assert.equal(operations.add(-13, -5), -18)
})

it('Test is correctly calculating the difference of 26 and 13', () => {
    assert.equal(operations.subtract(26, 13), 13)
})

it('Test is correctly calculating the product of 18 and 12', () => {
    assert.equal(operations.multiply(18, 12), 216)
})

it('Test is correctly calculating the quotient of 25 and 5', () => {
    assert.equal(operations.divide(25, 5), 5)
})

// adding validations for non-number inputs'
it('Test is indicating failure when a string is used instead of a number', () => {
    assert.equal(operations.validateNumbers('krishi', 5), false)
})

it('Test is indicating failure when a string is used instead of a number', () => {
    assert.equal(operations.validateNumbers('krishi', 'priyansh'), false)
})

it('Test is successfully running when two numbers are used', () => {
    assert.equal(operations.validateNumbers(10, 5), true)
})






// Reference: https://www.taniarascia.com/unit-testing-in-javascript/