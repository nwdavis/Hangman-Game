var countries = ["afghanistan","albania","algeria","andorra","angola","argentina","armenia","aruba","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","botswana","brazil","brunei","bulgaria","burundi","cambodia","cameroon","canada","chad","chile","china","colombia","croatia","cuba","cyprus","czechia","denmark","djibouti","dominica","ecuador","egypt","eritrea","estonia","ethiopia","fiji","finland","france","gabon","gambia","georgia","germany","ghana","gibraltar","greece","grenada","guatemala","guinea","guyana","haiti","honduras","hungary","iceland","india","indonesia","iran","iraq","ireland","israel","italy","jamaica","japan","jordan","kazakhstan","kenya","kiribati","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macedonia","madagascar","malawi","malaysia","maldives","mali","malta","martinique","mauritania","mauritius","mexico","moldova","monaco","mongolia","montenegro","morocco","mozambique","myanmar","namibia","nauru","nepal","netherlands","nicaragua","niger","nigeria","norway","oman","pakistan","palau","palestine","panama","paraguay","peru","philippines","poland","portugal","qatar","romania","russia","rwanda","samoa","senegal","serbia","seychelles","singapore","slovakia","slovenia","somalia","spain","sudan","suriname","swaziland","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","togo","tonga","tunisia","turkey","turkmenistan","tuvalu","uganda","ukraine","uruguay","uzbekistan","vanuatu","venezuela","vietnam","yemen","zambia","zimbabwe"]

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
		return Math.floor(Math.random() *164);	
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
			return Math.floor(Math.random() *164);	
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
				alert("The word was " + breakDown.join("") + "!" + " You've been hung from the neck and are now dead." + " Click okay to play again!");
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