export const getAllNLetterWords = (numberOfLetters) => {
    const words = ["apple", "mappx", "wzaaaa", "boy"];

    const validWords = words.filter((word) => word.length > 4);

    return validWords;
};
