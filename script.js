/*

document {
  querySelector
  getElementsByClassName
}

input {
  value
}

div {
  innerHTML
}

*/



function alertName(x) {
  alert(x)
}
let myName= "Marvin"
let numberFive = 5
  // alertName(numberFive)

// alertName -> alert

// task 1, 2, & 3
let inputName = document.querySelector(".name");
let inputYear = document.querySelector(".year");
let message = document.querySelector(".message");
let ageButton = document.querySelector(".age-button")

/*
let catName; // declare a variable
catName = "Garfield" // set a variable
catName = "John"

const neverChangeName = "some name"

let catName = "Garfield" // declare and set a variable
*/

// task 4: declare a variable called currentYear and set it equal to the current year.
let currentYear = 2022

// task 5: declare a variable called userName. Do not store a value yet.
let userName


// task 6: declare a variable called userYear. Do not store a value yet.
let userYear


// task 7: declare a variable called age. Do not store a value yet.
let age




ageButton.onclick = function() {

  // task 8: assign a value to userName. Set it equal to the value of inputName.
 userName = inputName.value

  // task 9: assign a value to userYear. Set it equal to the value of inputYear. This is a number! Be sure to use the Number function on it!
 userYear = Number(inputYear.value)

  // task 10: assign a value to age. We need to calculate this value by subtracting the userYear from currentYear
 age = currentYear- userYear
alert(age)
  // task 11: using .innerHTML, update message to display the userName and age. Use string interpolation for this to have a personalized message like: ________, it looks like you are (turning) _____ years old!

  
}
