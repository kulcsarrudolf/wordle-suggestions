const isTheLetterOnThePositon = (word: string, letter: string, position: number): boolean =>
  word.toUpperCase().charAt(position - 1) === letter;

class WordleWord {
  word: string;

  constructor(word: string) {
    this.word = word.toUpperCase();
  }

  doesContainAllThePlacedLetters = (placedLetters: any): boolean => {
    const placedLettersPosition: Array<number> = Array.from(placedLetters.keys());

    return placedLettersPosition.every((letterPosition: number) =>
      isTheLetterOnThePositon(this.word, placedLetters.get(letterPosition), letterPosition)
    );
  };

  doesYellowLettersKeepInGame = (yellowLetters: any): boolean => {
    const results: Array<boolean> = [];

    Array.from(yellowLetters.keys()).forEach((key: any) => {
      const letters = yellowLetters.get(key);

      results.push(
        letters.every((letter: string) => !isTheLetterOnThePositon(this.word, letter, key))
      );
    });

    return results.every((result: boolean) => result === true);
  };
}

export default WordleWord;
