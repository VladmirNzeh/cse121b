/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
const add = (number1, number2) => number1 + number2

const addNumbers = ( => {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    let sum = add(addNumber1, addNumber2);
    document.getElementById('sum').value = sum;
})
document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = (number1, number2) => number1 - number2

const subtractNumbers = () => {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    let difference = subtract(subtractNumber1, subtractNumber2);
    document.getElementById('difference').value = difference;
}
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    let product = multiply(factor1, factor2);
    document.getElementById('product').value = product;
}
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2

const divideNumbers = () => {
    let dividend = parseFloat(document.querySelector('#dividend').value);
    let divisor = parseFloat(document.querySelector('#divisor').value);
    let quotient = divide(dividend, divisor);
    document.getElementById('quotient').value = quotient.toFixed(2);
}
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */
function gettotal() {
    // Input
    let subtotal = parseFloat(document.querySelector('#subtotal').value);
    // Processing
    if (document.getElementById('member').checked) {
        total = subtotal * 0.8;
    } else {
        total = subtotal;
    }
    document.getElementById('total').textContent = `$ ${subtotal.toFixed(2)}`
}

document.getElementById('getTotal').addEventListener('click', gettotal)
/* Input */

/* Output */

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
 
/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
