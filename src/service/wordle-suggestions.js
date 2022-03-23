import WordleWord from './WordleWord';
import { getAllNLetterWords } from './words';

/**
 * Get Wordle Suggestions
 *
 * @param {*} goodLetters - array with good letters (e.g. ["A","C"])
 * @param {*} badLetters - array with bad letters (e.g. ["E", "A", "E"])
 * @param {*} placedLetters - A Map with placed letters for each position (e.g. [[1,"B"], [5,"E"]])
 * @param {*} yellowLetters - A Map with yellow letters for each position (e.g. [[1,"B"], [5,"E"]])
 *
 * @returns a list of suggested words
 */
export const getWordleSuggestions = (goodLetters, badLetters, placedLetters, yellowLetters) => {
  const fiveLetterWords = getAllNLetterWords(5);

  return fiveLetterWords.filter((word) =>
    isTheWordStillInGame(word.toUpperCase(), goodLetters, badLetters, placedLetters, yellowLetters)
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

  const currentWord = new WordleWord(word);

  if (!currentWord.doesContainAllThePlacedLetters(placedLetters)) {
    result = false;
  }

  Array.from(yellowLetters.keys()).forEach((letter) => {
    if (isTheLetterOnThePositon(word, letter, yellowLetters.get(letter))) {
      result = false;
    }
  });

  return result;
};

const isTheLetterOnThePositon = (word, letter, position) =>
  word.toUpperCase().charAt(position - 1) === letter;

export default getWordleSuggestions;
