export const getLettersFrequency = (filtredWords) => {
  const lettersFrequency = new Map();

  filtredWords.forEach((word) => {
    Array.from(word).forEach((letter) => {
      const ucLetter = letter.toUpperCase();

      if (lettersFrequency.get(ucLetter) === undefined) {
        lettersFrequency.set(ucLetter, 1);
      } else {
        const cF = lettersFrequency.get(ucLetter);
        lettersFrequency.set(ucLetter, cF + 1);
      }
    });
  });

  return lettersFrequency;
};

export const getTopTenLetters = (lettersFrequencyMap) => {
  const sortedLettersFrequencyMap = new Map(
    [...lettersFrequencyMap.entries()].sort((a, b) => b[1] - a[1])
  );

  return Array.from(sortedLettersFrequencyMap.keys()).slice(0, 10);
};

export const getAdvancedSuggestions = (filteredWords) => {
  const result = [];

  const topLetters = getTopTenLetters(getLettersFrequency(filteredWords));

  filteredWords.forEach((word) => {
    if (Array.from(word).every((letter) => topLetters.includes(letter.toUpperCase()))) {
      result.push(word);
    }
  });

  return result;
};

export const getAWordForStart = (filteredWords) => {
  const addvancedSuggestions = getAdvancedSuggestions(filteredWords);

  const items = addvancedSuggestions.filter(
    (word) => Array.from(new Set(Array.from(word))).length === word.length
  );

  return items[Math.floor(Math.random() * items.length)];
};

export default null;
