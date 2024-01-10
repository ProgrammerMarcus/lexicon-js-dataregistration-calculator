
// 1
let yourName = prompt("What is your name?")
console.log(`Your name is ${yourName}.`)

// 2
let yourYear = Number(prompt("What your were your born?"))

// 3
let currentYear = new Date().getFullYear()
let yourAge = currentYear - yourYear
console.log(`You are ${yourAge-1}-${yourAge} years old.`)

// 4
let num1 = Number(prompt("Give a number."))
let num2 = Number(prompt("Give another number."))
console.log(num1 + num2, num1 - num2, num1 * num2, num1 / num2)

// 1
alert("Your calculations are completed, please view to console to see the results.")