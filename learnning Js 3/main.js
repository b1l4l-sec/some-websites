let num1 = 6
let num2 = 9
// the two numbers

let num1Text = document.getElementById("num1")
let num2Text = document.getElementById("num2")
let resulttext = document.getElementById("res")

num1Text.textContent = num1
num2Text.textContent = num2

function add(){
    let result = num1 + num2 
    resulttext.textContent = "Result : " +  result
}

function subtract(){
    let result = num1 - num2 
    resulttext.textContent = "Result : " + result
}

function divide(){
    let result = num1 / num2 
    resulttext.textContent = "Result : " + result
}

function multiply(){
    let result = num1 * num2 
    resulttext.textContent = "Result : " + result
}