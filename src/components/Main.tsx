import React, { useState } from 'react';
import { TextField } from '@mui/material';

const Main = () => {
  const [goodLetters, setGoodLetters] = useState<Array<string>>([]);
  const [badLetters, setBadLetters] = useState([]);
  const [placedLetters, setPlacedLetters] = useState([]);
  const [yellowLetters, setYellowLetters] = useState([]);

  return (
    <>
      <TextField
        label="Good Letters"
        variant="outlined"
        value={goodLetters.join('')}
        onChange={(e) => {
          let x = Array.from(e.target.value);
          x = x.map((letter) => letter.toUpperCase());
          setGoodLetters([...new Set(x)]);
        }}
      />
    </>
  );
};

export default Main;
