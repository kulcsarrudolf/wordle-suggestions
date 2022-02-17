import checkWord from "check-word";

function* charCombinations(chars, minLength, maxLength) {
    chars = typeof chars === "string" ? chars : "";
    minLength = parseInt(minLength) || 0;
    maxLength = Math.max(parseInt(maxLength) || 0, minLength);

    //Generate for each word length
    for (let i = minLength; i <= maxLength; i++) {
        //Generate the first word for the password length by the repetition of first character.
        let word = (chars[0] || "").repeat(i);
        yield word;

        //Generate other possible combinations for the word
        //Total combinations will be chars.length raised to power of word.length
        //Make iteration for all possible combinations
        for (let j = 1; j < Math.pow(chars.length, i); j++) {
            //Make iteration for all indices of the word
            for (let k = 0; k < i; k++) {
                //check if the current index char need to be flipped to the next char.
                if (!(j % Math.pow(chars.length, k))) {
                    // Flip the current index char to the next.
                    let charIndex = chars.indexOf(word[k]) + 1;
                    let char = chars[charIndex < chars.length ? charIndex : 0];
                    word =
                        word.substr(0, k) + char + word.substr(k + char.length);
                }
            }

            //Re-oder not neccesary but it makes the words are yeilded alphabetically on ascending order.
            yield word.split("").reverse().join("");
        }
    }
}

export const getAllNLetterWords = (numberOfLetters) => {
    const a = checkWord("en");
    const allNLetterWords = [];

    // console.log(a.check("dog")); // true
    // console.log(a.check("perro")); // false
    // console.log(a.check("hi")); // true

    // var myString = "abcdefghijklmnopqrstuvwxyz";
    const permutations = charCombinations(
        "abcdefghijklmnopqrstuvwxyz",
        numberOfLetters,
        numberOfLetters
    );

    // console.log(permutations.next().value);
    // console.log(permutations.next().value);

    let permutation;
    while ((permutation = permutations.next())) {
        //tryPassword(password.value);

        if (a.check(permutation.value)) {
            console.log(permutation.value);
            // console.log(permutation.value);
            allNLetterWords.push(permutation.value);
        }
    }

    // for (permutation of permutations) print(permutation);

    // permutations.forEach((permutation) => {
    // console.log(permutation);
    // });

    // const words = ["apple", "mappx", "wzaaaa", "boy"];

    // const validWords = words.filter((word) => word.length > 4);

    return allNLetterWords;
};
