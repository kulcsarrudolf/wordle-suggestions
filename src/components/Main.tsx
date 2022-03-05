import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';

import Letters from './Letters';
import PlacedLetters from './PlacedLetters';
import Suggestions from './Suggestions';

import { getWordleSuggestions } from '../service/wordle-suggestions';

const Main = () => {
  const [goodLetters, setGoodLetters] = useState<Array<string>>([]);
  const [badLetters, setBadLetters] = useState<Array<string>>([]);
  const [placedLetters, setPlacedLetters] = useState<any>([]);
  const [yellowLetters, setYellowLetters] = useState<Array<any>>([]);

  const [suggestions, setSuggestions] = useState<Array<string>>([]);

  useEffect(() => {
    setSuggestions(getWordleSuggestions(goodLetters, badLetters, placedLetters, []));
  }, [goodLetters, badLetters, placedLetters]);

  return (
    <>
      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h4">WORDLE SUGGESTIONS</Typography>
        </Grid>

        <Letters title="Good Letters" letters={goodLetters} setLetters={setGoodLetters} />

        <Letters title="Bad Letters" letters={badLetters} setLetters={setBadLetters} />

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
