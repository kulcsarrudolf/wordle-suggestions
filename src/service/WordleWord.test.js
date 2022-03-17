import WordleWord from './WordleWord';

const PLACED_LETTERS_TEST_MAP = new Map([
  [1, 'S'],
  [3, 'S'],
  [4, 'S'],
]);

test('Placed Letter Test - When the word does contain all the placed letters', () => {
  const currentWord = new WordleWord('sissy');

  expect(currentWord.doesContainAllThePlacedLetters(PLACED_LETTERS_TEST_MAP)).toBe(true);
});

test('Placed Letter Test - When the word does not contain all the placed letters', () => {
  const currentWords = [new WordleWord('missy'), new WordleWord('whisk')];

  currentWords.forEach((currentWord) => {
    expect(currentWord.doesContainAllThePlacedLetters(PLACED_LETTERS_TEST_MAP)).toBe(false);
  });
});
