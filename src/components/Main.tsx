import React, { useState } from 'react';
import { TextField } from '@mui/material';

const Main = () => {
  const [goodLetters, setGoodLetters] = useState([]);
  const [badLetters, setBadLetters] = useState([]);
  const [placedLetters, setPlacedLetters] = useState([]);
  const [yellowLetters, setYellowLetters] = useState([]);

  return (
    <>
      <TextField label="Outlined" variant="outlined" />
    </>
  );
};

export default Main;
