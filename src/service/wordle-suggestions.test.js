import { getWordleSuggestions } from './wordle-suggestions';

test('Placed Letters Test - When a letter is repeating', () => {
  const suggestions = getWordleSuggestions(
    ['S'],
    ['O', 'U', 'N', 'D', 'C', 'A', 'B', 'T', 'E', 'R'],
    new Map([
      [1, 'S'],
      [3, 'S'],
      [4, 'S'],
    ]),
    new Map([])
  );

  expect(suggestions.length).toBe(1);
  expect(suggestions[0]).toBe('sissy');
});

test('Yellow Letters Test - When no letters defined for the last place', () => {
  const suggestions = getWordleSuggestions(
    ['O', 'D'],
    ['T', 'R', 'A', 'C', 'E', 'G', 'L', 'S'],
    new Map([[2, 'O']]),
    new Map([
      [1, []],
      [2, []],
      [3, []],
      [4, ['D']],
      [5, []],
    ])
  );

  expect(suggestions.length).toBe(12);
});
