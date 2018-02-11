//this is my main file that runs the puzzle program
//required files including contructor functions and npm
var word = require("./word.js");
var letter = require("./letter.js");
var inquirer = require("inquirer");

//this are my puzzle word choices
var sports = ["basketball", "football", "hockey", "volleyball", "tennis", "baseball", "soccer", "softball"];

//select at random one of the puzzle word choices
var sportsWord = sports[Math.floor(Math.random()*sports.length)];

//make an instance/object of the word constructor function and name the variable puzzleWord
var puzzleWord = new word(sportsWord);

//the user can have ten wrong letter guesses
var maxGuesses = 10;	


//output the beginning (blank) puzzle board to the user by using the puzzleWord from the game file 
//     with a process on it from the word file which actually has a process on it from the letter file 
console.log(puzzleWord.toString());


//this is the primary function in the game file.  this function is recursively called which keeps the request
//    for letter guesses from the user going and starts a new puzzle after the current game ends.
//first, the function is defined.
function guess(){
	
	//checks if any guesses left in the game.  ends the game if no guesses available for 
	//    the user.  especially relevant during recursive function calls.
	if (!maxGuesses > 0) {
		console.log('You have no more guesses. Game Over.');
		optionA();//sends the program to a function that allows the user to start
		          //    a new puzzle
	}
		

	//prompts the user for a letter and takes the input
		inquirer.prompt({
		name: 'letterInput',
		type: 'text',
		message: 'Guess a letter (lowercase)',
		//validates user input through RegularExpression (RegEXp) that input is lowercase letters
		//     with one character in the string (whitespace character)
		validate: function(str){
			var regEx = new RegExp("^[a-z\s]{1,1}$");
			return regEx.test(str);
				}
		}).then(function(input){//user letter input captured
				var abc = input.letterInput;  //variable declared to capture the user letter input
													//caught by the inquirer prompt.  
													//'input' is the answer from the prompt and 
													//'letterInput' is the 'name:'.					
				
				//what processes we are doing with the input received
				//function to identify duplicate letter selection by the user and 
				//    have the user request a different letter
				for(var i=0; i<puzzleWord.value.length; i++){
					if(abc === puzzleWord.lettersGuessed[i]){
						console.log("This letter is a duplicate.");
						return guess();
					}
				}

				//function to find matches between the user's letter selection and the
				//    puzzle word
				var loseGuess = true;
				for(var i=0; i<puzzleWord.value.length; i++){
					if(abc == puzzleWord.wordLetters[i].char){
						puzzleWord.wordLetters[i].appear = '1';
						loseGuess = false;
					}
				}

				if (loseGuess == true){
					maxGuesses--;
				}

		

			//outputs the updated puzzle board after the letter selection of the user
			console.log(puzzleWord.toString());

			//the user's letter selection is pushed to the lettersGuessed array to avoid penalizing
			//      for duplicate letter requests in the future
			puzzleWord.lettersGuessed.push(abc);

			//determine if the puzzle has been solved
			if(puzzleWord.isComplete()){ 
				console.log("CONGRATULATIONS!    You Won!");
				console.log('Yes! It was ' + puzzleWord.toString() + '!');
				return optionA();//function call to allow the user a new puzzle if current puzzle is solved
			}
							
			console.log('You have ' + (maxGuesses) + ' guesses left.');
			guess(); //Recursive call  (get the user's next letter selection)



	});	//the end of the inquirer prompt (the letter selection of the user has been handled).

}	
	

//function definition of a function to allow a user a new word puzzle
function optionA(){
	console.log("Would you like to play another game?")
			inquirer.prompt({
			name: "again",
			type: "confirm",
			message:  "Would you like to play another match?"
		}).then(function(answer){
			if (answer.again == true) {
				sportsWord = sports[Math.floor(Math.random()*sports.length)];
				puzzleWord = new word(sportsWord);
				maxGuesses = 10;
				guess();//a new puzzle word has been created and the program requests a letter
						//    guess from the user
			}
			else {
				console.log("Come back again soon!");//game ending
				return;
			}
		});

}


guess();//first function call of the program