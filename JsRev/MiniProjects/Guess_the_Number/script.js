let rand = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const input = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remainingGuess = document.querySelector(".lastResult")
const lowhigh = document.querySelector(".lowhigh")
const startOver = document.querySelector(".result")

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1
let playgame= true

if(playgame){
    submit.addEventListener("click", (event) => {
        event.preventDefault()
        const guess = parseInt(input.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess < 1){
        alert("Please enter a number more than or equal to 1")
    }else if(guess > 100){
        alert("Please enter a number less than or equal to 100")
    }else{
        prevGuess.push(guess)
        if(numGuesses > 10){
            displayGuess(guess)
            displayMsg(`Game Over. The random number was ${rand}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === rand){
        displayMsg(`You guessed it right!`)
        endGame()
    }else if(guess < rand){
        displayMsg(`Number is too low!`)
    }else{
        displayMsg(`Number is too high!`)
    }
}

function displayGuess(guess){
    input.value = ''
    guessSlot.innerHTML += `${guess}   `
    numGuesses++
    remainingGuess.innerHTML = `${10 - numGuesses}`
}

function displayMsg(message){
    lowhigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    input.value = ''
    input.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame" >Start new game!</h2>`
    startOver.appendChild(p)
    playgame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", (event) =>{
        rand = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuesses = 1
        guessSlot.innerHTML = ''
        remainingGuess.innerHTML = `${10 - numGuesses}`
        input.removeAttribute("disabled")
        startOver.removeChild(p)
        playgame = true
    })
}