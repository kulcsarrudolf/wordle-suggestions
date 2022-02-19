const isTheGivenLetterOnThePosition = (word, letter, position) => {
    return word.toUpperCase().charAt(position - 1) === letter;
};

export const isTheWordStillAccepted = (
    word,
    goodLetters,
    badLetters,
    placedLetters
) => {
    let result = true;
    word = word.toUpperCase();

    goodLetters.forEach((letter) => {
        if (!word.includes(letter)) {
            result = false;
        }
    });

    badLetters.forEach((letter) => {
        if (word.includes(letter)) {
            result = false;
        }
    });

    Array.from(placedLetters.keys()).forEach((letter) => {
        if (
            !isTheGivenLetterOnThePosition(
                word,
                letter,
                placedLetters.get(letter)
            )
        ) {
            result = false;
        }
    });

    return result;
};
