/**
 * Guess The Number Game
 * TODO DONE: Get user value from input and save it to variable numberGuess
 * TODO DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * TODO DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * TODO DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * TODO DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * TODO DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO DONE: Save the guess history in a variable called guess
 * TODO DONE: Display the guess history using displayHistory() function
 * TODO DONE: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 
let guesses = [];

// Variable for store the correct random number 
let correctNumber = getRandomNumber();
//console.log(correctNumber);

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    // domEvent();

    var input = document.getElementById("number-guess");
    input.addEventListener("keyup", function(event)  {
      if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("number-submit").click();
      }
      if(event.keyCode === 27){
        initGame();
      }
    });


}

// function domEvent(){
//   // for(let i = 0; i < document.body.children.length; i++){
//   //   alert(document.body.children[i].innerText);

//   // }
//   alert(document.body.lastElementChild.innerHTML);
// }

/**
 * Functionality for playing the whole game
 */
function playGame(){
  // *CODE GOES BELOW HERE *
  let numberGuess = document.getElementById('number-guess').value;
  //console.log(correctNumber);
  if(numberGuess > 100 || numberGuess <1) {
    showOutOfRange();
  } else {
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
  } 
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *
function displayResult (numberGuess) {
    if (numberGuess > correctNumber) {
        //console.log("Guess is to high!");
        showNumberAbove();
    } else if( numberGuess < correctNumber) {
        //console.log("Guess is to low!");
        showNumberBelow();
    } else if (numberGuess == correctNumber ) {
        //console.log("Your guess is correct!");
        showYouWon();
    }

}


/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  // *CODE GOES BELOW HERE *
  // reset the correctNumber
  // reset the resultDisplay
  // reset the guesses array
  // reset the guess history display
  // return perhaps?
  document.getElementById("number-guess").value = "";
  correctNumber = getRandomNumber();
  resetResultContent();
  guesses = [];
  displayHistory();


}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber(){
  // *CODE GOES BELOW HERE *
  var min= 0;
  var max= 101;
  var correctNumber = Math.floor(Math.random() * (max-min+1) + min); // return a random integer from 1 to 100
  return correctNumber
  // let randomNumber = Math.random() *100;
  //console.log(randomNumber);
  //console.log(correctNumber);

}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
guesses.push(guess);
//console.log(guesses);


}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index= guesses.length -1 ; // TODO -- substract -1 bcoz index start 0 - to increment reverse
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  while(index >= 0) {
      list += "<li class='list-group-item'>" +
      "You guessed " + guesses[index] + "</li>"; // concat
      index-=1; // to increment reverse

  }
  
  //var num = 0;
  //while (num < 100) {
  //  num += 1;
  
  /* concat
  // var str1 = " xxx";
  // var str2 = "xxxx";
  // var x = str1.concat(str2, str3);
  */

  list += '</ul>';
  //console.log(guesses);

  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
    case "danger":
      dialog = "<div class='alert alert-danger' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  //setup different won text shceme
  let guessesCount = guesses.length+1;
  let text;
  if (guessesCount == 1) {
    text = "Super Awesome! You got it in " + guessesCount + " guesses!";
  } else if ((guessesCount > 0) && (guessesCount <=5)) {
    text = "Yeay! You made it in " + guessesCount + " guesses!";
  } else if ((guessesCount > 5) && (guessesCount <=10)) {
    text = "Nice! You got it in " + guessesCount + " guesses!";
  } else {
    text = "Better later than never!";
  } 


  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('won' , text);
// console.log(dialog);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning' , text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning' , text);

  document.getElementById("result").innerHTML = dialog;
}

function showOutOfRange () {
  const text = "You must guess a number between 1 and 100!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  let dialog = getDialog("danger", text);
  document.getElementById("result").innerHTML = dialog;
}

// i love coding, you know, its thrilled and fun, just let you know that 
// this is would me so much awesome, create a platform for everyone
// like we having a magic wond in hand. thats fantastic tho,
// never imagine in my life would be turn to this life shceme,
// am just grateful enough having this journey, that lemme in 
// thank you all the amazing peoples outhere,
// lets kick ass off and doing the real work here
