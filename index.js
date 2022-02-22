import { getWordleSuggestions } from "./wordle-suggestions.js";

const suggestions = getWordleSuggestions(
    ["O", "R", "N"],
    ["A", "U", "D", "I", "S", "M", "K", "E", "W", "G"],
    [["O", 3]],
    [
        ["R", 2],
        ["N", 3],
    ]
);

suggestions.forEach((word) => {
    console.log(word);
});
