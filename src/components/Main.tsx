import { useEffect, useState } from 'react';
import { TextField, Grid, Chip, Stack, Typography } from '@mui/material';

import { getWordleSuggestions } from '../service/wordle-suggestions';

const Main = () => {
  const [goodLetters, setGoodLetters] = useState<Array<string>>([]);
  const [badLetters, setBadLetters] = useState<Array<string>>([]);
  const [placedLetters, setPlacedLetters] = useState<any>(
    new Map([
      ['FIRST_LETTER', ''],
      ['SECOND_LETTER', ''],
      ['THIRD_LETTER', ''],
      ['FOURTH_LETTER', ''],
      ['FIFTH_LETTER', ''],
    ])
  );

  const [yellowLetters, setYellowLetters] = useState([]);

  const [suggestions, setSuggestions] = useState<Array<string>>([]);

  const lettersToArray = (lettersString: string) => {
    let x = Array.from(lettersString);
    x = x.map((letter) => letter.toUpperCase());
    return [...new Set(x)];
  };

  useEffect(() => {
    const a: Array<any> = [];

    if (placedLetters.get('FIRST_LETTER') !== '') {
      a.push([placedLetters.get('FIRST_LETTER'), 1]);
    }

    if (placedLetters.get('SECOND_LETTER') !== '') {
      a.push([placedLetters.get('SECOND_LETTER'), 2]);
    }

    if (placedLetters.get('THIRD_LETTER') !== '') {
      a.push([placedLetters.get('THIRD_LETTER'), 3]);
    }

    if (placedLetters.get('FOURTH_LETTER') !== '') {
      a.push([placedLetters.get('FOURTH_LETTER'), 4]);
    }

    if (placedLetters.get('FIFTH_LETTER') !== '') {
      a.push([placedLetters.get('FIFTH_LETTER'), 5]);
    }

    setSuggestions(getWordleSuggestions(goodLetters, badLetters, a, []));

    // setSuggestions(getWordleSuggestions([], [], [], []));
    console.log(placedLetters);
  }, [goodLetters, badLetters, placedLetters]);

  return (
    <>
      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
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

        <Grid item>
          {Array.from(placedLetters.keys()).map((key: any) => (
            <>
              <TextField
                variant="outlined"
                value={placedLetters.get(key)}
                inputProps={{ min: 0, style: { textAlign: 'center', textTransform: 'uppercase' } }}
                style={{ width: '5rem', margin: '0.25rem' }}
                onChange={(e) => {
                  console.log(key);
                  console.log(e.target.value);
                  const placedLettersCopy = placedLetters;
                  placedLettersCopy.set(key, e.target.value);

                  console.log(placedLettersCopy);
                  setPlacedLetters(new Map(placedLettersCopy));
                }}
              />
            </>
          ))}
        </Grid>

        <Grid item>
          <Typography>{suggestions.length}</Typography>
        </Grid>
        {suggestions.length < 1000 && (
          <Grid item>
            {suggestions.map((word) => (
              <Chip
                variant="outlined"
                color="primary"
                size="small"
                label={word}
                style={{ margin: '0.25rem' }}
              />
            ))}
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Main;
