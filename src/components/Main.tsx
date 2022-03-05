import { useEffect, useState } from 'react';
import { Alert, Grid, Typography } from '@mui/material';

import Warning from './Warning';
import Letters from './Letters';
import PlacedLetters from './PlacedLetters';
import Suggestions from './Suggestions';

import { getWordleSuggestions } from '../service/wordle-suggestions';

const Main = () => {
  const [goodLetters, setGoodLetters] = useState<Array<string>>([]);
  const [badLetters, setBadLetters] = useState<Array<string>>([]);
  const [placedLetters, setPlacedLetters] = useState<any>([]);

  const [suggestions, setSuggestions] = useState<Array<string>>([]);

  useEffect(() => {
    setSuggestions(getWordleSuggestions(goodLetters, badLetters, placedLetters, []));
  }, [goodLetters, badLetters, placedLetters]);

  return (
    <>
      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <Warning />
        <Grid item>
          <Typography variant="h4">WORDLE SUGGESTIONS</Typography>
        </Grid>

        <Grid item>
          <Alert severity="info">
            You can test this app here:{' '}
            <a
              rel="noopener noreferrer"
              href="https://www.devangthakkar.com/wordle_archive/"
              target="_blank"
              style={{ textDecoration: 'none', fontWeight: 'bold' }}
            >
              Wordle Archive
            </a>
            .
          </Alert>
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
