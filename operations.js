// constants for operations to add, subtract, multiply, divide
const add = (x, y) => +x + +y
const subtract = (x, y) => +x - +y
const multiply = (x, y) => +x * +y
const divide = (x, y) => +x / +y

// constant for validating the numbers
const validateNumbers = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
        return false
    }
    return true
}

// exporting modules
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    validateNumbers
}










// Reference: https://www.taniarascia.com/unit-testing-in-javascript/