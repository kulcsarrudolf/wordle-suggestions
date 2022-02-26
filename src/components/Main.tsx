import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

import { getWordleSuggestions } from '../service/wordle-suggestions';

const Main = () => {
  const [goodLetters, setGoodLetters] = useState<Array<string>>([]);
  const [badLetters, setBadLetters] = useState<Array<string>>([]);
  const [placedLetters, setPlacedLetters] = useState([]);
  const [yellowLetters, setYellowLetters] = useState([]);

  const [suggestions, setSuggestions] = useState<Array<string>>([]);

  const lettersToArray = (lettersString: string) => {
    let x = Array.from(lettersString);
    x = x.map((letter) => letter.toUpperCase());
    return [...new Set(x)];
  };

  useEffect(() => {
    setSuggestions(getWordleSuggestions(goodLetters, badLetters, [], []));

    // setSuggestions(getWordleSuggestions([], [], [], []));
  }, [goodLetters, badLetters]);

  return (
    <>
      <TextField
        label="Good Letters"
        variant="outlined"
        value={goodLetters.join('')}
        onChange={(e) => {
          setGoodLetters(lettersToArray(e.target.value));
        }}
      />

      <TextField
        label="Bad Letters"
        variant="outlined"
        value={badLetters.join('')}
        onChange={(e) => {
          setBadLetters(lettersToArray(e.target.value));
        }}
      />

      {suggestions.map((word) => (
        <>{word}</>
      ))}
    </>
  );
};

export default Main;
