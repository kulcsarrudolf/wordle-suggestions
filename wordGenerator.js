import checkWord from "check-word";

export const getAllNLetterWords = (numberOfLetters) => {
    const a = checkWord("en");

    console.log(a.check("dog")); // true
    console.log(a.check("perro")); // false
    console.log(a.check("hi")); // true

    const words = ["apple", "mappx", "wzaaaa", "boy"];

    const validWords = words.filter((word) => word.length > 4);

    return validWords;
};
