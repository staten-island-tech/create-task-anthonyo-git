import { DomSelectors } from "../js/dom.js";

const { wordDisplay, keys, livesDisplay } = DomSelectors();

let guessedLetters = []; // array 
let word = '';
let display = '';
let lives = 8;

async function getDATA() {
    let res = await fetch("https://random-word-api.vercel.app/api?words=1&length=5");
    let data = await res.json();
    word = data[0];
    console.log(word);

    display = '_ '.repeat(word.length);
    wordDisplay.innerHTML = display;

    keys.forEach((key) => {
        key.addEventListener('click', () => {
            let guessedLetter = key.innerText.toLowerCase();
            if (word.toLowerCase().includes(guessedLetter)) {
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === guessedLetter) {
                        display = display.split('');
                        display[i*2] = key.innerText; //for _ + space 
                        display = display.join('');
                    }
                }
                wordDisplay.innerHTML = display;
            } else {
                lives--;
                livesDisplay.innerHTML = 'x '.repeat(lives);
            }
            if (display.toLowerCase() === word.toLowerCase()) {
                console.log('You win!');
            } else if (lives === 0) {
                console.log('You lose!');
            }
        });
    });
}

getDATA();

//need to reveal the letter from the display string , foreach loop
            // need to decrease number of lives
            // update the live display
            //check if display = word 