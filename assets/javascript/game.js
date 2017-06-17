var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Botswana","Brazil","Brunei","Bulgaria","Burundi","Cambodia","Cameroon","Canada","Chad","Chile","China","Colombia","Croatia","Cuba","Cyprus","Czechia","Denmark","Djibouti","Dominica","Ecuador","Egypt","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Grenada","Guatemala","Guinea","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Martinique","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palau","Palestine","Panama","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Samoa","Senegal","Serbia","Seychelles","Singapore","Slovakia","Slovenia","Somalia","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"]

var wins = 0;


function gameStart(){
	var guessesLeft = 10;
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
	var userChoice = [];
	var undrscrArray = [];

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
		return Math.floor(Math.random() *165);	
		}

	//random country using number

	var wordChoice = countries[randNum()];

	//breaking word into letters

	var breakDown = wordChoice.split("");

	console.log(breakDown)

	//creating the underscores

	for (var i = 0; i < breakDown.length; i++){
		undrscrArray.push("_");
	}

	console.log(undrscrArray); 

	//working from here up

	function update() {

	var gameField = document.getElementById("worddiv");
		
		for (var i=0; i < breakDown.length; i++) {
			var splitUp = undrscrArray.join(" ");
			gameField.innerHTML = splitUp;
		    
		}

	}

	update();


	function reset() {


		function randNum() {
			return Math.floor(Math.random() *165);	
		}

		wordChoice = countries[randNum()];

		breakDown = wordChoice.split("");

		for (var i = 0; i < breakDown.length; i++){
			undrscrArray.push("_");
		}


	}



	document.onkeyup = function(event) {




		var userChoice = event.key.toLowerCase();

			if ((alphabet.indexOf(userChoice) === -1)) {
				alert("That's not a letter.");
				return false;
			}

			if (guessedLetters.indexOf(userChoice) > -1) {
				alert("Ummmm, you already guessed that!");
				return false;
			}

			if ((breakDown.indexOf(userChoice)) > -1) {

				
				for (var i = 0; i < breakDown.length; i++){
						if (userChoice === breakDown[i]) {
							
							undrscrArray[i] = userChoice;
							update();
						}
				}
			}

			if (breakDown.indexOf(userChoice) === -1) {
				guessesLeft--;
				guessedLetters.push(userChoice);
			}

			if ((guessesLeft) < 1) {
				guessesLeft = 10;
				guessedLetters = [];
				gameStart();
				alert("You've been hung from the neck and are now dead.")
			}

			if (undrscrArray.indexOf("_") === -1) {
				wins++;
				guessesLeft = 10;
				guessedLetters = [];
				alert("Congratulations! The word was " + breakDown.join("") + "!" + " Click okay to play again!");
				reset();
				update();
				gameStart();
				
				
			}
			

			var html = "<p> Wins: " + wins + "</p>" + 
			"<p> Number of guesses remaining: " + guessesLeft + "</p>" +
			"<p> Wrong letters: " + guessedLetters + "</p>";

			document.querySelector("#scoring").innerHTML = html;

		}
}

gameStart();