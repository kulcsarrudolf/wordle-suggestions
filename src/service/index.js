import { getWordleSuggestions } from './wordle-suggestions';

const suggestions = getWordleSuggestions(
  ['K', 'E'],
  ['C', 'A', 'N', 'D', 'Y', 'H', 'I', 'R'],
  [],
  [
    ['K', 3],
    ['E', 4],
  ]
);

suggestions.forEach((word) => {
  console.log(word);
});

console.log(suggestions.length);
