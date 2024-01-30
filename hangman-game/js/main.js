import { DomSelectors } from "../js/dom.js";

let { wordDisplay, keys, livesDisplay } = DomSelectors();



let word = '';
let display = '';
let lives = 8;

async function getDATA() {
    let res = await fetch("https://random-word-api.vercel.app/api?words=1&length=5");
    let data = await res.json();
    word = data[0];
    console.log(word);

    display = '_'.repeat(word.length);
    wordDisplay.innerHTML = display;

    keys.forEach((key) => {
        key.addEventListener('click', () => {
            if (word.includes(key.innerText)) {
                for (let i = 0; i < word.length; i++) {
                 if (word[i] === key.innerText[i]) {
                    display === 
                 }

                  };
            };
            
            //need to reveal the letter from the display string , foreach loop
            // need to decrease number of lives
            // update the live display
            //check if display = word 
        
        


        ));
};

getDATA()