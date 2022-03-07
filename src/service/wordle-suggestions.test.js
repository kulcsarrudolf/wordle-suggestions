import { areTheYellowLettersExcludesTheWord, getWordleSuggestions } from './wordle-suggestions';

test('test1', () => {
  console.log(areTheYellowLettersExcludesTheWord('test', new Map([['E', 1]])));
});

test('Placed Letters Test - When a letter is repeating', () => {
  const suggestions = getWordleSuggestions(
    ['S'],
    ['O', 'U', 'N', 'D', 'C', 'A', 'B', 'T', 'E', 'R'],
    [
      ['S', 1],
      ['S', 3],
      ['S', 4],
    ],
    []
  );

  expect(suggestions.length).toBe(1);
  expect(suggestions[0]).toBe('sissy');
});
