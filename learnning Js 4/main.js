let cardsText = document.getElementById("cards")
let sumText = document.getElementById("sum")
// let sumText = document.querySelector("#sum")
let resultText = document.getElementById("result")

let cards = []
let sum = 0 
let blackjack = false
let alive = false
let dead = false

let info =""
function start(){
    cards = []
    if (dead === false ){
        alive = true
        let num1 = randomcard()
        let num2 = randomcard()
        cards.push(num1)
        cards.push(num2)
        sum = num1 + num2
        game()
    }
}

function game(){
    cardsText.textContent = "Cards : "
    for(let i=0;i<cards.length;i++){
        cardsText.textContent += cards[i] + " "
    }
    sumText.textContent = sum
    if (sum < 21){
        info = "Sorry, draw a new card please."
    }else if (sum === 21){
        blackjack = true
        info = "Yeaaa buddy, you got BlackJack!"
    }else {
        alive = false
        dead = true
        info = "You're out of the game try later."
    }
    resultText.textContent = info
}

function newcard(){
    if(alive === true && blackjack === false){
        let num3 = randomcard()
        cards.push(num3)
        sum += num3
        game()
    }
    
}

function randomcard(){
    let normalrandom = Math.random() // 0 1
    let randomnumber = Math.floor(normalrandom*13) + 1 // 1 13
    if(randomnumber === 1){
        randomnumber = 11
    }
    if(randomnumber > 10 ){
        randomnumber = 10
    }
    return randomnumber // rulles
}

// *******************

let player = {
    nameP : "Sung",
    chips : 2120 
}

let sungText = document.getElementById("sung-jin-wu")
sungText.textContent = player.nameP + ": " + player.chips + "Dh"// we need to get 21 to win
