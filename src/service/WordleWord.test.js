import WordleWord from './WordleWord';

describe('Placed Letter Tests', () => {
  const PLACED_LETTERS_TEST_MAP = new Map([
    [1, 'S'],
    [3, 'S'],
    [4, 'S'],
  ]);

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

describe('Yellow Letters Test', () => {
  const YELLOW_LETTERS_TEST_MAP = new Map([
    [1, []],
    [2, ['A']],
    [3, ['L']],
    [4, ['S', 'A']],
    [5, ['S']],
  ]);

  test('When the yellow letters does not exclude the word', () => {
    const testWord = new WordleWord('skald');

    expect(testWord.doesYellowLettersKeepInGame(YELLOW_LETTERS_TEST_MAP)).toBe(true);
  });

  test('When the yellow letters does exclude the word', () => {
    const testWord = new WordleWord('monas');

    expect(testWord.doesYellowLettersKeepInGame(YELLOW_LETTERS_TEST_MAP)).toBe(false);
  });
});
