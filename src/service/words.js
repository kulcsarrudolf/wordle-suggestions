import wordlist from 'wordlist-english';

export const getAllNLetterWords = (numberOfLetters) => {
  const englishWords = wordlist.english;

  return englishWords.filter((word) => word.length === numberOfLetters);
};
