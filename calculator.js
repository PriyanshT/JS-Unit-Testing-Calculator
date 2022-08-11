const operations = require('./operations.js')
const readline = require('readline')

// Use readline to create command line interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log("Welcome to calculator testing with mocha")

rl.question('Enter first number: ', (x) => {
    rl.question('Enter second number: ', (y) => {
        rl.question(
            `
      Please choose from the following options:
      [1] Addition (+)
      [2] Subtraction (-)
      [3] Multiplication (*)
      [4] Division (/)
      Enter the operation: `,
            (choice) => {
                if (!operations.validateNumbers(x, y)) {
                    console.log('You have entered non-number values! Please restart the program.')
                } else {
                    switch (choice) {
                        case '1':
                            console.log(
                                `The sum of ${x} and ${y} is ${operations.add(x, y)}.`
                            )
                            break
                        case '2':
                            console.log(
                                `The difference of ${x} and ${y} is ${operations.subtract(x,y)}.`
                            )
                            break
                        case '3':
                            console.log(
                                `The product of ${x} and ${y} is ${operations.multiply(x, y)}.`
                            )
                            break
                        case '4':
                            console.log(
                                `The quotient of ${x} and ${y} is ${operations.divide(x, y)}.`
                            )
                            break
                        default:
                            console.log(
                                'Please choose a number from 1-4.'
                            )
                            break
                    }
                }
                rl.close()
            }
        )
    })
})