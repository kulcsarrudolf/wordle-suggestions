import { getAllNLetterWords } from "./wordGenerator.js";

const x = getAllNLetterWords(4);

x.forEach((word) => {
    console.log(word);
});

console.log("test");
