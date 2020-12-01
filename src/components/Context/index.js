import { createContext, useState, useEffect } from "react";
import LiveHeart from "../../images/liveHeart.png";
import LostHeart from "../../images/lostHeart.png";

export const WordGameContext = createContext();

export const Provider = ({ children }) => {
	const overlay = document.querySelector("#overlay");

	/*
	 * Set Overlay title
	 * Will change at the end of the game when overlay appears again.
	 * Updated value will depend on win or lose of the game.
	 */

	const [overlayTitle, changeTitle] = useState("Wheel of Success");

	/*
	 * Set the score, which is the number of misses in the game
	 * If a letter selected doesn't match one in the phrase
	 *   a miss is added via `addMiss`.
	 */
	const [missed, addMiss] = useState(1); // Starts at one to run the current number against the checkWin function.

  /*
	 * A place to store the current phrase that is randomly selected
	 */
	const [currentPhrase, setPhrase] = useState([]);

  /*
   * useEffect() to be able to set the game and reset states if you are starting over
   * Without the click event inside this, some of the DOM elements will not change!
   */
	useEffect(() => {
		// Grab overlay button for the click event in the useEffect
		const resetBtn = document.querySelector(".btn__reset");
		// Grab letter buttons and hearts for resetting
		const letterBtns = document.querySelectorAll(".keyrow button");
		const hearts = document.querySelectorAll(".tries > img");
		resetBtn.addEventListener("click", () => {
			// If click occurs to "start a new game" run a cleanup of the misses, array, buttons, and hearts
			addMiss(1);
			setPhrase([]);
			letterBtns.forEach((letter) => {
				letter.classList.remove("chosen");
				letter.disabled = false;
			});
			document.querySelector("#overlay").classList.remove("lose", "win");
			hearts.forEach((heart) => heart.setAttribute("src", `${LiveHeart}`));

			// Phrases to be selected for the game
			const phrases = [
				"Happy Coding",
				"Never Give Up",
				"Let it Go",
				"Piece of Cake",
				"Back to Square One",
			];

			// Declare a variable to store an array of letters and spaces of a phrase.
			const displayPhrase = [];

			// Function to pick a phrase from the list and return a new array of letters and spaces
			const getRandomPhrase = (phrases) => {
				// Randomly choose a phrase from 'phrases' array.
				const chosenPhrase =
					phrases[Math.floor(Math.random() * phrases.length)];
				// Turn the characters of the randomly chosen phrase into an array and return it.
				return chosenPhrase.split("");
			};
			// Store the selected array
			const phraseArray = getRandomPhrase(phrases);

			// Loop through each letter/space of the selected phrase
			for (let i = 0; i < phraseArray.length; i++) {
				// Check if the current index contains a space or a letter, and store it in the appropriate <li>
				// Push the new <li> into the new array.
				if (phraseArray[i] === " ") {
					displayPhrase.push(
						<li className="space" key={i}>
							&nbsp;
						</li>
					);
				} else {
					displayPhrase.push(
						<li className="letter" key={i}>
							{phraseArray[i]}
						</li>
					);
				}
			}

			// Store in the cuurentPhrase state to pass to the Phrase component
			setPhrase(displayPhrase);
		});
	}, []);

	// Store the number of misses to pass to the number of hearts displayed and the checkWin function.
  const totalTries = 5;
  
	/*
	 * Function to check the win state
	 * This function determines which overlay change is displayed at the end of the game
	 * Grab all the letters in the phrase with the class "show"
	 * If the number of letters with this class equals the number of letters show the "Win" Overlay.
	 * If the missed count reaches a determined number, show the "Lose" overlay
	 * Also change the button in the overlay to say "New Game".
	 */

	const checkWin = () => {
		// Grab array of letters in the phrase display
		const letters = document.querySelectorAll(".letter");

		// Grab all the letters that have the class "show"
		const shownLetters = document.querySelectorAll(".show");

		// Create a new header to store a callback statement in the overlay
		const endText = document.querySelector("#overlay > h3");

		// Grab the button in the overlay
		const overlayBtn = document.querySelector(".btn__reset");

		// Boolean for when the game is complete
		let complete = false;

		/*
		 * If the # of letters with  the "show" class equals the total # in the phrase,
		 * Show the win overlay
		 */
		if (shownLetters.length === letters.length) {
			changeTitle("You Win!");
			overlay.style.display = "flex"; // The overlay is originally styled in flexbox
			overlay.classList.add("win"); // Creates a green background
			// Statement for the new header
			endText.innerHTML = `
          Congratulations. You WON! <br> 
          Try again?
        `;
			overlay.insertBefore(endText, overlayBtn); // Place statement before the overlay button
			complete = true;
		}

		/*
		 * If number of misses equals the total declared tries.
		 * Show the lose overlay
		 */
		if (missed === totalTries) {
			changeTitle("You Lost!");
			overlay.style.display = "flex";
			overlay.classList.add("lose"); // Creates a red background.
			endText.innerHTML = `
        Game Over. You lose! <br> 
        Try again?
      `;
			overlay.insertBefore(endText, overlayBtn);
			complete = true;
		}

		/*
		 * If the "complete" variable is true, change the overlay button text to "New Game"
		 * and update state to true for the reset
		 */
		if (complete) {
			overlayBtn.textContent = "New Game";
		}
	};

	// Function to check the given phrase against a letter selected
	const checkPhrase = (selectedLetter) => {
		// Grab the given phrase in the display
		const phraseDisplay = document.querySelectorAll(".letter");

		let match = false;

		for (let i = 0; i < phraseDisplay.length; i++) {
			const phraseLetter = phraseDisplay[i];

			if (selectedLetter.textContent === phraseLetter.textContent.toLowerCase()) {
				phraseLetter.classList.add("show");
				match = true;
			}
		}
		return match;
	};

	/*
	 * Function to run when user selects a letter.
	 * Checks if the letter selected equals one in the phrase
	 * If it returns true display the given letter in the phrase display with the "show" class.
	 * If false, change a heart in Scoreboard from "liveHeart" to "lostHeart"
	 * Run the win condition check against the updated "missed" state
	 */

	const selectedLetter = (event) => {
		const target = event.target;

    // Highlight the selected letter button
		target.className = "chosen";
		// Prevent the selected letter button from being clicked again.
		target.disabled = true;

		// Grab the first live heart in the scoreboard
		const liveHeart = document.querySelector(
			`.tries > img[src="${LiveHeart}"]`
		);

		// Check the letter with the phrase and return a boolean
		let matched = checkPhrase(target);

		// If the selected letter doesn't match, add 1 to the missed state.
		if (!matched) {
			addMiss(missed + 1);

			// Change the first live heart to a lost heart.
			liveHeart.setAttribute("src", `${LostHeart}`);
		}

		// Check the win/lose conditions
		checkWin();
	};

	return (
		<WordGameContext.Provider
			value={{
				selectedLetter,
				totalTries,
				currentPhrase,
        overlayTitle
			}}
		>
			{children}
		</WordGameContext.Provider>
	);
};
