const list =  ["paper.png", "rock.png", "scissors.png"]
const paper =  document.getElementById('paper')
const scissors = document.getElementById('scissors')
const rock = document.getElementById('rock')
const computerChoice = document.getElementById ('choice')
const yourResult = document.getElementById ('results') 
paper.onclick = makeYourChoice
scissors.onclick = makeYourChoice
rock.onclick = makeYourChoice

function makeYourChoice () {
    const myDecision = this.dataset.id
    const computerDecision = makeRandomChoice()

    let result = " "

    if ( myDecision == computerDecision ) {
        result = "Try again"
    }
    else if( myDecision ==0 && computerDecision ==1) 
    {  result = "You lose"}
   else if ( myDecision ==0 && computerDecision ==2 ) 
   {result = "You win"}
   else if ( myDecision ==1  && computerDecision ==2) 
   { result = "You lose"}
   else if ( myDecision ==1 && computerDecision ==0)
   {result ="You win"}
   else if (myDecision ==2 && computerDecision ==0) {
       result = "You lose"}
   else if (myDecision ==2 && computerDecision ==1) {
       result = " You win"}
       yourResult.innerText = result
       yourResult.style.color= 'red'
       yourResult.style.fontWeight = "bold"
   }



function makeRandomChoice () {
    const number = Math.round(Math.random()*2)

computerChoice.src = `./images/${list[number]}`
return number }

