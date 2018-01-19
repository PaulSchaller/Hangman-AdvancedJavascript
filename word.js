//this is my word constructor function
//the word constructor function deals with the puzzle word as a whole
//  (including printing the puzzle word output to the user and determining when 
//        the puzzle word has been solved)
//the word constructor function requires the letter constructor function
var letter = require("./letter.js");

//the puzzle word is stored as a whole in a single value and as an array
//     of letters.  the letters that the user has guessed on the word are
//                 also stored.
var word = function(value){
	this.value = value;
	this.wordLetters = [];
	this.lettersGuessed = [];

	//making an instance of the letter constructor for each letter in puzzleWord
	for(var i=0; i<value.length;i++){
		this.wordLetters[i] = new letter(value[i]);
		this.wordLetters[i].appear = '2';
	}
};


//a function prototype that outputs to the screen the puzzle board during the 
//     game.  screenOutput is a function prototype that is able to be used by 
//         having required the letter constructor function.
word.prototype.toString = function(){
  var output = [];
  for(var i=0; i<this.wordLetters.length; i++){
    output += this.wordLetters[i].screenOutput();
  }
  return output;
}


//a function prototype that determines if the puzzle has been solved by
//  the user.
word.prototype.isComplete = function(){
	var result = true;
	for(i=0; i<this.value.length; i++){
		if (this.wordLetters[i].appear == '2'){
			result = false;
		}
	}
	return result;
}


//this file exports to other files that require it a constructor function named word
module.exports = word;

