//this is my letter constructor function

//the letter is passed into the function and then saved in a property of the constructor function
//also in the constructor function is a property regulating what is displayed on the puzzle board 
var letter = function(char) {
	this.char = char;
	this.appear = '';
};


//a function prototype that regulates if the letter or a blank line is 
//           shown on the puzzle board for a letter position
letter.prototype.screenOutput = function() {
	if (this.appear === '1') {
		return this.char;
	}
	if (this.appear === '2') {
	 	return "_ ";
	}
}	


//this file exports to other files that require it a constructor function named letter
module.exports = letter;