import { getAllNLetterWords } from "./words.js";

const fiveLetterWords = getAllNLetterWords(5);

// x.forEach((word) => {
//     console.log(word);
// });

const isTheGivenLetterOnThePosition = (word, letter, position) => {
    return word.toUpperCase().charAt(position - 1) === letter;
};

fiveLetterWords.forEach((word) => {
    const wordUpperCase = word.toUpperCase();

    if (
        !wordUpperCase.includes("H") &&
        !wordUpperCase.includes("E") &&
        !wordUpperCase.includes("R") &&
        !wordUpperCase.includes("V") &&
        !wordUpperCase.includes("U") &&
        !wordUpperCase.includes("L") &&
        !wordUpperCase.includes("P") &&
        !wordUpperCase.includes("N") &&
        wordUpperCase.includes("I") &&
        isTheGivenLetterOnThePosition(wordUpperCase, "T", 5) &&
        isTheGivenLetterOnThePosition(wordUpperCase, "I", 4) &&
        isTheGivenLetterOnThePosition(wordUpperCase, "A", 2)
    ) {
        console.log(word);
    }
});
