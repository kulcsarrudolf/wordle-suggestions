import { useEffect, useState } from 'react';
import { TextField, Grid, Typography } from '@mui/material';

import Suggestions from './Suggestions';
import PlacedLetters from './PlacedLetters';

import { getWordleSuggestions } from '../service/wordle-suggestions';

const Main = () => {
  const [goodLetters, setGoodLetters] = useState<Array<string>>([]);
  const [badLetters, setBadLetters] = useState<Array<string>>([]);
  const [placedLetters, setPlacedLetters] = useState<any>([]);

  const [yellowLetters, setYellowLetters] = useState<Array<any>>([]);

  const [suggestions, setSuggestions] = useState<Array<string>>([]);

  const lettersToArray = (lettersString: string) => {
    let x = Array.from(lettersString);
    x = x.map((letter) => letter.toUpperCase());
    return [...new Set(x)];
  };

  useEffect(() => {
    setSuggestions(getWordleSuggestions(goodLetters, badLetters, placedLetters, []));
  }, [goodLetters, badLetters, placedLetters]);

  return (
    <>
      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h4">WORDLE SUGGESTIONS</Typography>
        </Grid>
        <Grid item>
          <TextField
            label="Good Letters"
            variant="outlined"
            value={goodLetters.join('')}
            onChange={(e) => {
              setGoodLetters(lettersToArray(e.target.value));
            }}
          />
        </Grid>

        <Grid item>
          <TextField
            label="Bad Letters"
            variant="outlined"
            value={badLetters.join('')}
            onChange={(e) => {
              setBadLetters(lettersToArray(e.target.value));
            }}
          />
        </Grid>

        <PlacedLetters setPlacedLettersArray={setPlacedLetters} />

        <Suggestions
          suggestions={suggestions}
          isDisplayed={goodLetters.length > 0 || badLetters.length > 0}
        />
      </Grid>
    </>
  );
};

export default Main;
