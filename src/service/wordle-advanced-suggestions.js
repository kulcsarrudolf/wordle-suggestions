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

export default null;
