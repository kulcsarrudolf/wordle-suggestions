import wordlist from "wordlist-english";

export const getAllNLetterWords = (numberOfLetters) => {
    var englishWords = wordlist["english"];

    return englishWords.filter((word) => word.length === numberOfLetters);
};
