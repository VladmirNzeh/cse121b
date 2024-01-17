/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

// declare and instantiate a variable to hold your name
const myName = "Emmanuel Chidiebere Nzeh"

// place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").innerHTML = myName

// declare and instantiate a variable to hold the current year
const year = 2022

// place the value of the current year variable into the HTML file
document.querySelector("#year").innerHTML = year

// declare and instantiate a variable to hold the name of your picture
const picture = "images/Ashsuit.jpg"

// copy your image into the "images" folder

// place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src", picture)



/* Step 5 - Array */

// declare and instantiate an array variable to hold your favorite foods
let tastyFoods = ["Beans", "Steak", "Potatoes", "Plantains", "Moi Moi", "Pineapple", "Apple", "Banana"]

// place the values of the favorite foods variable into the HTML file
document.querySelector("#food").innerHTML = tastyFoods

// declare and instantiate a variable to hold another favorite food
const otherFood = "Milkshakes"

// add the variable holding another favorite food to the favorite food array
tastyFoods.push(otherFood)

// repeat 
document.querySelector("#food").innerHTML = tastyFoods

// remove the first element in the favorite foods array
tastyFoods.shift()

// repeat 
document.querySelector("#food").innerHTML = tastyFoods

// remove the last element in the favorite foods array
tastyFoods.pop()

// repeat 
document.querySelector("#food").innerHTML = tastyFoods