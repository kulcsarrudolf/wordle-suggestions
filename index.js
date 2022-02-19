import { isTheWordStillAccepted } from "./wordle.js";
import { getAllNLetterWords } from "./words.js";

const fiveLetterWords = getAllNLetterWords(5);

const theCharactersWhichAreAccepted = ["E", "A", "R", "B", "E"];
const theCharactersWhichAreNotAccepted = ["D", "L", "T", "Y", "S", "V"];

const lettersWithExactPozitions = new Map([
    ["B", 1],
    ["R", 2],
    ["A", 3],
    ["E", 5],
]);

const wordsInGame = fiveLetterWords.filter((word) =>
    isTheWordStillAccepted(
        word,
        theCharactersWhichAreAccepted,
        theCharactersWhichAreNotAccepted,
        lettersWithExactPozitions
    )
);

wordsInGame.forEach((word) => {
    console.log(word);
});
