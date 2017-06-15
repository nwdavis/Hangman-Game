var countries = ["guatemala", "iraq", "monaco", "argentina", "libya", "brunei", "chile", "bahrain",
"mexico", "georgia", "belgium", "hungary", "england", "ireland", "bahamas", "benin",
"bulgaria", "macedonia", "uganda", "sudan", "guyana", "panama", "montenegro", "grenada",
"turkey", "oman", "togo", "jamaica", "kiribati", "haiti", "djibouti", "norway", "cameroon", "belize", "kazakhstan"]

var wins = 0;
var losses = 0;
var guessesLeft = 0;
var alphabet = ["a", 
				"b", 
				"c", 
				"d", 
				"e", 
				"f",
				"g",
				"h",
				"i",
				"j",
				"k",
				"l",
				"m",
				"n",
				"o",
				"p",
				"q",
				"r",
				"s",
				"t",
				"u",
				"v",
				"w",
				"x",
				"y",
				"z"];
var guessedLetters = [];
var wordChoice = [];


//computer chooses a word from the array countries
//computer breaks that word into separate letters
//computer replaces those letters with underscores
//computer enters those letters(underscores) into the word div
//user types a letter
//computer registers that key press and checks if that letter appears in the chosen word using a for loop
//letter is added either to the word or to the guessedLetters array
//guesses left goes down by 1
//if the word is completed, wins goes up by 1, guesses left resets, guessed letters resets, and the computer picks a new word



//random number

function randNum() {
	return Math.floor(Math.random() *35);	
	}

//random country using number

var wordChoice = countries[randNum()];

//breaking word into letters

var breakDown = wordChoice.split("");

console.log(breakDown);

//for loop replacing letters with underscores

var wordDiv = document.getElementById("theword");

for (i = 0; i < breakDown.length; i++) {
	var letterSpan = document.createElement("span");
	letterSpan.innerHTML = breakDown.indexOf[i];
	console.log(letterSpan);
	wordDiv.appendChild(letterSpan);
	
}
