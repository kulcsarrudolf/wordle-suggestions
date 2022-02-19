import { isTheWordStillAccepted } from "./wordle.js";
import { getAllNLetterWords } from "./words.js";

const fiveLetterWords = getAllNLetterWords(5);

const theCharactersWhichAreAccepted = ["A", "I", "T"];
const theCharactersWhichAreNotAccepted = [
    "H",
    "E",
    "R",
    "V",
    "U",
    "L",
    "P",
    "N",
    "W",
    "S",
    "D",
    "V",
];

const lettersWithExactPozitions = new Map([
    ["A", 2],
    ["I", 4],
    ["T", 5],
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
