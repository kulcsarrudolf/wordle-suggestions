import WordleWord from './WordleWord';

const PLACED_LETTERS_TEST_MAP = new Map([
  [1, 'S'],
  [3, 'S'],
  [4, 'S'],
]);

describe('Placed Letter Tests', () => {
  const testWords = [new WordleWord('missy'), new WordleWord('whisk')];

  test('When the word does contain all the placed letters', () => {
    const testWord = new WordleWord('sissy');

    expect(testWord.doesContainAllThePlacedLetters(PLACED_LETTERS_TEST_MAP)).toBe(true);
  });

  test('When the word does not contain all the placed letters', () => {
    testWords.forEach((currentWord) => {
      expect(currentWord.doesContainAllThePlacedLetters(PLACED_LETTERS_TEST_MAP)).toBe(false);
    });
  });

  test('When the placed letters map is empty', () => {
    testWords.forEach((currentWord) => {
      expect(currentWord.doesContainAllThePlacedLetters([])).toBe(true);
    });
  });
});
