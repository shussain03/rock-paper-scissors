//Brief
// Rock paper scissors game

// Feature 1:
// Create a rock paper scissors game that will take user input through prompts
// Randomly generate a computer move // dont know how to do that?
// Compare this to the user’s move // completed
// Display the result in an alert

// Feature 2:
// When the other player reaches 5 points they win
console.log("working");

// How to play the game
// winner - rules of the game using if else statement because I tried using math.random and didnt know how to apply it // ask in lesson.

//explaination of my function below - the winrule function - if player1 chooses rock &&(and) player2 chooses paper ||(or) player1 chooses rock and player2 chooses scissor

//How to win the game ;
// win rule for both player 1+2 = rock + scissors, scissors + paper, paper + rock.
//draw rule = rock + rock, paper + paper, scissors + scissors.

// Welcome message and instruction.

alert("Welcome to our game Rock, Paper, Scissors. Instructions: This is a 2 player game. The game is first to 5. To play type the first letter in the square bracket []  of each word e.g [R]ock type r and then press enter. Good luck I hope you win!");


// 2 players set-up prompts with options and also made sure all capital letters when entered are always lowerCase.

var player1 = prompt("Player 1, please choose either [R]ock, [P]aper or [S]cissors and type your answer here....").toLowerCase();
var player2 = prompt("Player 2, it your move. Please choose either [R]ock, [P]aper or [S]cissors and type your answer here....").toLowerCase();
//
//
// //win section for both player 1 and 2
var winner = function (player1, player2) {
  //
  if (player1 == "r" && player2 == "s" || player1 == "s" && player2 == "p" || player1 == "p" && player2 == "r") {
    alert("Player 1 you are a winner!");
  }
  else if (player2 == "r" && player1 == "s" || player2 == "s" && player1 == "p" || player1 == "p" && player2 == "r") {
    alert("Player 2 you are a winner!");
  }

  // draw section
  else if (player1 == "r" && player2 == "r" || player1 == "p" && player2 == "p" || player1 == "s" && player2 == "s") {
    alert("That's a draw!");
  }
}

// winner alert
winner(player1, player2);
//
//
// // issues faced = how do i use the math.random and how do I count the wins and show it to the user.
// // also it's not working in the browser.... i dont understand what it wrong.
