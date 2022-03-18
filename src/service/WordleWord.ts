const isTheLetterOnThePositon = (word: string, letter: string, position: number): boolean =>
  word.toUpperCase().charAt(position - 1) === letter;

class WordleWord {
  word: string;

  constructor(word: string) {
    this.word = word;
  }

  doesContainAllThePlacedLetters = (placedLetters: any): boolean => {
    const placedLettersPosition: Array<number> = Array.from(placedLetters.keys());

    return placedLettersPosition.every((letterPosition: number) =>
      isTheLetterOnThePositon(this.word, placedLetters.get(letterPosition), letterPosition)
    );
  };
}

export default WordleWord;
