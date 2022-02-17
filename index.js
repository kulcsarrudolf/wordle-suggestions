import { getAllNLetterWords } from "./wordGenerator.js";

const x = getAllNLetterWords(5);

x.forEach((word) => {
    console.log(word);
});

console.log("test");
