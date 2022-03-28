export const lettersToArray = (lettersString: string) => {
  let x = Array.from(lettersString);
  x = x.map((letter) => letter.toUpperCase());
  return [...new Set(x)];
};

// TODO: Refactor this ASAP
export const getSuffixForNumber = (number: number) => {
  switch (number) {
    case 1:
      return '1st';
    case 2:
      return '2nd';
    case 3:
      return '3rd';
    case 4:
      return '4th';
    case 5:
      return '5th';
    default:
      return 'error';
  }
};
