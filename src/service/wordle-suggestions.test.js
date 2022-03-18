import { getWordleSuggestions } from './wordle-suggestions';

test('Placed Letters Test - When a letter is repeating', () => {
  const suggestions = getWordleSuggestions(
    ['S'],
    ['O', 'U', 'N', 'D', 'C', 'A', 'B', 'T', 'E', 'R'],
    [
      [1, 'S'],
      [3, 'S'],
      [4, 'S'],
    ],
    []
  );

  expect(suggestions.length).toBe(1);
  expect(suggestions[0]).toBe('sissy');
});
