
let countEle = document.getElementById("count")
let str = document.getElementById("string")

let count = 0

function increment() {
    count = count + 1
    countEle.innerText = count
}

function save() {
    str.textContent +=count + " - "
    // previous logs function
    countEle.innerText = 0
    count = 0
}