const isTheLetterOnThePositon = (word: string, letter: string, position: number): boolean =>
  word.toUpperCase().charAt(position - 1) === letter;

class WordleWord {
  word: string;

  constructor(word: string) {
    this.word = word;
  }

  doesContainAllThePlacedLetters = (placedLetters: any): boolean => {
    let result: boolean = true;
    const placedLettersPosition: Array<number> = Array.from(placedLetters.keys());

    placedLettersPosition.forEach((letterPosition: number) => {
      if (isTheLetterOnThePositon(this.word, placedLetters.get(letterPosition), letterPosition)) {
        return;
      }
      result = false;
    });

    return result;
  };
}

export default WordleWord;
