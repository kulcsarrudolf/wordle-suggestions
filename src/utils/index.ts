export const lettersToArray = (lettersString: string) => {
  let x = Array.from(lettersString);
  x = x.map((letter) => letter.toUpperCase());
  return [...new Set(x)];
};

export const getSuffixForNumber = (number: number) => {
  const suffixes = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];
  const index = number % 100;
  return `${number}${suffixes[index] || 'th'}`;
};
