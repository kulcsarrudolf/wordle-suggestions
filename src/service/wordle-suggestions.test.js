import { areTheYellowLettersExcludesTheWord, getWordleSuggestions } from './wordle-suggestions';

test('test1', () => {
  console.log(areTheYellowLettersExcludesTheWord('test', new Map([['E', 1]])));
});

test('test2', () => {
  const suggestions = getWordleSuggestions(
    ['K', 'E'],
    ['C', 'A', 'N', 'D', 'Y', 'H', 'I', 'R'],
    [],
    [
      ['K', 3],
      ['E', 4],
    ]
  );

  console.log(suggestions);
});
