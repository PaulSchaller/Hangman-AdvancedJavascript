# Hangman-AdvancedJavascript

This program plays a hangman word puzzle game with a user.

This program has a command line interface in node.js with the user.  The user is able to play the game without interacting with node.js with technical inputs.  

The game is fun and the programmer is able to compose interesting groups of words for the user to guess.

The code is very compatible and reusable.  Constructor functions with function prototypes were programmed for reusability and efficiency.  The programmer can change the puzzle selection words in the main file without reprogramming the primary design of how the game handles the letters and words.  Distinction is made between letters, words, and the program flow in the main file.  A word constructor file was created which can handle all sorts of data on issues concerning the word of the puzzle and how the word processes and interacts in the game.  This makes it clearer to the programmer how the program works and eases the difficulty of updates.

npm inquirer was also used.  This also reused code and cut down on programming tasks.

The hangman puzzle program chooses a word and outputs a puzzle board to the user.  The user guesses letters.  The results of the guesses are revealed on the puzzle board.  Updates on game status are given, such as the number of guesses remaining.  A successful solution of the puzzle getss a 'congratulations!' and the option to start a new game.  