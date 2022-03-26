import {
  getAdvancedSuggestions,
  getAWordForStart,
  getLettersFrequency,
} from './wordle-advanced-suggestions';
import getWordleSuggestions from './wordle-suggestions';

test('letters frequency', () => {
  const testFilteredWords = ['apple', 'pixel', 'trace', 'senor'];

  const lettersFrequencyMap = getLettersFrequency(testFilteredWords);

  expect(lettersFrequencyMap.get('A')).toBe(2);
  expect(lettersFrequencyMap.get('P')).toBe(3);
  expect(lettersFrequencyMap.get('L')).toBe(2);
  expect(lettersFrequencyMap.get('E')).toBe(4);
  expect(lettersFrequencyMap.get('I')).toBe(1);
  expect(lettersFrequencyMap.get('X')).toBe(1);
  expect(lettersFrequencyMap.get('T')).toBe(1);
  expect(lettersFrequencyMap.get('R')).toBe(2);
  expect(lettersFrequencyMap.get('C')).toBe(1);
  expect(lettersFrequencyMap.get('S')).toBe(1);
  expect(lettersFrequencyMap.get('N')).toBe(1);
  expect(lettersFrequencyMap.get('O')).toBe(1);
});

test('test', () => {
  const suggestions = getWordleSuggestions(
    ['E', 'U', 'R'],
    ['I', 'D', 'A', 'L', 'N', 'O', 'T', 'S', 'B', 'Y', 'C', 'V'],
    new Map([
      [2, 'U'],
      [3, 'R'],
      [5, 'E'],
    ]),
    new Map([
      [3, 'E'],
      [4, 'E'],
      [4, 'R'],
    ])
  );

  //   console.log(getAWordForStart(suggestions));
  console.log(getAdvancedSuggestions(suggestions));
});
