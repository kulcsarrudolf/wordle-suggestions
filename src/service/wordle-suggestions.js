import { getAllNLetterWords } from './words';

/**
 * Get Wordle Suggestions
 *
 * @param {*} goodLetters - array with good letters (e.g. ["A","C"])
 * @param {*} badLetters - array with bad letters (e.g. ["E", "A", "E"])
 * @param {*} placedLetters - (e.g. [["B",1], ["E", 5]])
 *
 * @returns a list of suggested words
 */
export const getWordleSuggestions = (goodLetters, badLetters, placedLetters, yellowLetters) => {
  const fiveLetterWords = getAllNLetterWords(5);
  const placedLettersMap = new Map(placedLetters);
  const yellowLettersMaps = new Map(yellowLetters);

  return fiveLetterWords.filter((word) =>
    isTheWordStillInGame(
      word.toUpperCase(),
      goodLetters,
      badLetters,
      placedLettersMap,
      yellowLettersMaps
    )
  );
};

const isTheWordStillInGame = (word, goodLetters, badLetters, placedLetters, yellowLetters) => {
  let result = true;

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
    if (!isTheLetterOnThePositon(word, letter, placedLetters.get(letter))) {
      result = false;
    }
  });

  Array.from(yellowLetters.keys()).forEach((letter) => {
    if (isTheLetterOnThePositon(word, letter, yellowLetters.get(letter))) {
      result = false;
    }
  });

  return result;
};

export const areTheYellowLettersExcludesTheWord = (word, yellowLetters) => {
  const yellowLettersKeys = Array.from(yellowLetters.keys());

  return yellowLettersKeys.every((letter) =>
    isTheLetterOnThePositon(word, letter, yellowLetters.get(letter))
  );
};

const isTheLetterOnThePositon = (word, letter, position) =>
  word.toUpperCase().charAt(position - 1) === letter;
