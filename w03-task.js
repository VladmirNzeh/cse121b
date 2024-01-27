/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
    // Step 2: In the function, return the sum of the parameters number1 and number2
    return number1 + number2;
  }
  
  // Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of add1 and add2. Pass them to the add function
  function addNumbers() {
    let add1 = parseInt(document.getElementById('#add1').value);
    let add2 = parseInt(document.getElementById('#add2').value);
    let result = add(add1, add2);
  
    // Step 4: Assign the return value to an HTML form element with an ID of sum
    document.getElementById('#sum').value = result;
  }
  
  // Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
  document.getElementById('#addNumbers').addEventListener('click', addNumbers);
  
  // Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
  const subtract = function (number1, number2) {
    return number1 - number2;
  };
  
  const subtractNumbers = function () {
    let subtract1 = parseInt(document.getElementById('#subtract1').value);
    let subtract2 = parseInt(document.getElementById('#subtract2').value);
    let result = subtract(subtract1, subtract2);
    document.getElementById('#difference').value = result;
  };
  
  document
    .getElementById('#subtractNumbers')
    .addEventListener('click', subtractNumbers);
  
  // Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and multiplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
  const multiply = (number1, number2) => number1 * number2;
  
  const multiplyNumbers = () => {
    let factor1 = parseInt(document.getElementById('#factor1').value);
    let factor2 = parseInt(document.getElementById('#factor2').value);
    let result = multiply(factor1, factor2);
    document.getElementById('#product').value = result;
  };
  
  document
    .getElementById('#multiplyNumbers')
    .addEventListener('click', multiplyNumbers);
  
  // Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
  function divide(number1, number2) {
    return number1 / number2;
  }
  
  function divideNumbers() {
    let dividend = parseFloat(document.getElementById('#dividend').value);
    let divisor = parseFloat(document.getElementById('#divisor').value);
    let result = divide(dividend, divisor);
    document.getElementById('#quotient').value = result;
  }
  
  document
    .getElementById('#divideNumbers')
    .addEventListener('click', divideNumbers);
  
  
  /* Decision Makers */

  function getTotal(){
    //Input
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    //Processing
    if (document.getElementById("member").checked){
        subtotal = subtotal - subtotal * 0.2; //20% discount
    }
    //Output
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
  }
  document.getElementById('getTotal').addEventListener('click', getTotal);

  // Step 1: Declare and instantiate a variable of type Date to hold the current date
  const currentDate = new Date();
  
  // Step 2: Declare a variable to hold the current year
  let currentYear;
  
  // Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
  currentYear = currentDate.getFullYear();
  
  // Step 4: Assign the current year variable to an HTML form element with an ID of year
  document.querySelector("#year").textContent = currentYear;
  
  /* ARRAY METHODS */
  
  // Step 1: Declare and instantiate an array variable to hold the numbers 1 through 13
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
  ];
  
  // Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
  document.getElementById("#array").textContent = numbers;
  
  // Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
  document.getElementById("#odds").textContent = numbers.filter(
    (number) => number % 2
  );
  
  // Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
  document.getElementById("#evens").textContent = numbers.filter(
    (number) => number % 2 === 0
  );
  
  // Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
  document.getElementById("#sumOfArray").textContent = numbers.reduce(
    (sum, number) => sum + number,
    0
  );
  
  // Step 6: Use the map array method to multiply each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
  document.getElementById("#multiplied").textContent = numbers.map(
    (number) => number * 2
  );
  
  // Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
  document.getElementById("#sumOfMultiplied").textContent = numbers
    .map((number) => number * 2)
    .reduce((sum, number) => sum + number, 0);