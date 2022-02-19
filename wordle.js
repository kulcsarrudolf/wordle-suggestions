const isTheGivenLetterOnThePosition = (word, letter, position) => {
    return word.toUpperCase().charAt(position - 1) === letter;
};

export const isTheWordStillAccepted = (
    word,
    includedCharacters,
    excludedCharacters,
    charactersWithSpecificPozitions
) => {
    let result = true;
    word = word.toUpperCase();

    includedCharacters.forEach((character) => {
        if (!word.includes(character)) {
            result = false;
        }
    });

    excludedCharacters.forEach((character) => {
        if (word.includes(character)) {
            result = false;
        }
    });

    Array.from(charactersWithSpecificPozitions.keys()).forEach((character) => {
        if (
            !isTheGivenLetterOnThePosition(
                word,
                character,
                charactersWithSpecificPozitions.get(character)
            )
        ) {
            result = false;
        }
    });

    return result;
};
