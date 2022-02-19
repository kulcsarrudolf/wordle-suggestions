import { getWordleSuggestions } from "./wordle-suggestions.js";

const suggestions = getWordleSuggestions(
    ["E", "A", "R", "B", "E"],
    ["D", "L", "T", "Y", "S", "V"],
    [
        ["B", 1],
        ["R", 2],
        ["A", 3],
        ["E", 5],
    ]
);

suggestions.forEach((word) => {
    console.log(word);
});
