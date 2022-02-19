import { getAllNLetterWords } from "./words.js";

/**
 * Get Wordle Suggestions
 *
 * @param {*} goodLetters - array with good letters (e.g. ["A","C"])
 * @param {*} badLetters - array with bad letters (e.g. ["E", "A", "E"])
 * @param {*} placedLetters - (e.g. [["B",1], ["E", 5]])
 *
 * @returns a list of suggested words
 */
export const getWordleSuggestions = (
    goodLetters,
    badLetters,
    placedLetters
) => {
    const fiveLetterWords = getAllNLetterWords(5);

    const suggestions = fiveLetterWords.filter((word) =>
        isTheWordStillAccepted(
            word,
            goodLetters,
            badLetters,
            new Map(placedLetters)
        )
    );

    return suggestions;
};

const isTheWordStillAccepted = (
    word,
    goodLetters,
    badLetters,
    placedLetters
) => {
    let result = true;
    word = word.toUpperCase();

    goodLetters.forEach((letter) => {
        if (!word.includes(letter)) {
            result = false;
        }
    });

    badLetters.forEach((letter) => {
        if (word.includes(letter)) {
            result = false;
        }
    });

    Array.from(placedLetters.keys()).forEach((letter) => {
        if (
            !isTheGivenLetterOnThePosition(
                word,
                letter,
                placedLetters.get(letter)
            )
        ) {
            result = false;
        }
    });

    return result;
};

const isTheGivenLetterOnThePosition = (word, letter, position) => {
    return word.toUpperCase().charAt(position - 1) === letter;
};
