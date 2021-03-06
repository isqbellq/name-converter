"use strict"

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "z"];
let newWord = [];


function getWord() {
	let word = document.getElementById("name").value.toLowerCase();

	for (let i = 0; i < word.length; i++) {
		for (var j = 0; j < alphabet.length; j++) {

			if (word[i] === alphabet[j] && alphabet[alphabet.indexOf(alphabet[j]) + 4] === undefined) {
				let newLetter = alphabet[4 - (alphabet.length - alphabet.indexOf(alphabet[j]))];

				newWord.push(newLetter);
			} else if (word[i] === alphabet[j]) {
				let newLetter = alphabet[alphabet.indexOf(alphabet[j]) + 4];

				newWord.push(newLetter);
			}
		}

		if (word[i] === " ") {
			let newLetter = " ";
			newWord.push(newLetter);
		} else if (word[i] === "j" || word[i] === "k" || word[i] === "w" || word[i] === "x" || word[i] === "y") {
			let newLetter = word[i];
			newWord.push(newLetter);
		}
	}
}

function capitalise(str) {

	let words = str.split(" ");
	let newSentence = [];

	for (let word of words) {
		let letter = word.slice(0, 1).toUpperCase();
		let rest = word.slice(1, word.length).toLowerCase();

		word = letter += rest;
		newSentence.push(word);
	}        
	
	let uppercase = newSentence.join(" ");
	return uppercase;
}


function go() {	
	getWord();
	let result = capitalise(newWord.join(''));
	document.getElementById("result").value = result;
	window.scrollTo(0, document.body.scrollHeight);
}

document.getElementById("convert").addEventListener("click", go);

document.addEventListener('keypress', function (e) {
	let key = e.which || e.keyCode;

	if (key === 13) {
		go();
	}
});
