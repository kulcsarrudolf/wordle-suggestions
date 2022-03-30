import { useEffect, useState } from 'react';
import { Alert, Grid, Typography } from '@mui/material';

import Warning from './Warning';
import Letters from './Letters';
import PlacedLetters from './PlacedLetters';
import YellowLetters from './YellowLetters';
import Suggestions from './Suggestions';

import { getWordleSuggestions } from '../service/wordle-suggestions';

const Main = () => {
  const [goodLetters, setGoodLetters] = useState<Array<string>>([]);
  const [badLetters, setBadLetters] = useState<Array<string>>([]);
  const [placedLetters, setPlacedLetters] = useState<any>(new Map([]));
  const [yellowLetters, setYellowLetters] = useState<any>(new Map([]));

  const [suggestions, setSuggestions] = useState<any>([]);

  useEffect(() => {
    if (goodLetters.length > 0 || badLetters.length > 0) {
      setSuggestions(getWordleSuggestions(goodLetters, badLetters, placedLetters, yellowLetters));
    }
  }, [goodLetters, badLetters, placedLetters, yellowLetters]);

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

        <YellowLetters setYellowLetters={setYellowLetters} />

        <PlacedLetters setPlacedLetters={setPlacedLetters} />

        <Suggestions suggestions={suggestions} />
      </Grid>
    </>
  );
};

export default Main;
