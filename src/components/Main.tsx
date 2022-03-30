import { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';

import AppBar from './AppBar';
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
  const [showWarning, setShowWarning] = useState<boolean>(true);

  const [suggestions, setSuggestions] = useState<any>([]);

  const onReset = () => {
    setGoodLetters([]);
    setBadLetters([]);
    setPlacedLetters(new Map([]));
    setYellowLetters(new Map([]));
  };

  const onShowWarning = () => {
    setShowWarning((prev) => !prev);
  };

  useEffect(() => {
    if (goodLetters.length > 0 || badLetters.length > 0) {
      setSuggestions(getWordleSuggestions(goodLetters, badLetters, placedLetters, yellowLetters));
    }
  }, [goodLetters, badLetters, placedLetters, yellowLetters]);

  return (
    <>
      <AppBar onReset={onReset} onShowWarning={onShowWarning} />

      <Container maxWidth="md" sx={{ bgcolor: 'background.paper', mt: '2rem', minHeight: '20rem' }}>
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
          <Letters title="Good Letters" letters={goodLetters} setLetters={setGoodLetters} />

          <Letters title="Bad Letters" letters={badLetters} setLetters={setBadLetters} />

          <PlacedLetters setPlacedLetters={setPlacedLetters} />

          <YellowLetters setYellowLetters={setYellowLetters} />

          <Suggestions suggestions={suggestions} />
        </Grid>
      </Container>

      <Warning open={showWarning} setOpen={onShowWarning} />
    </>
  );
};

export default Main;
