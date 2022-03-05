import { useEffect, useState } from 'react';
import { Typography, TextField, Grid } from '@mui/material';
import { v4 as getKey } from 'uuid';

type PlacedLettersProps = {
  setPlacedLettersArray: any;
};

const PlacedLetters: React.FC<PlacedLettersProps> = ({
  setPlacedLettersArray,
}: PlacedLettersProps) => {
  const [placedLetters, setPlacedLetters] = useState<any>(
    new Map([
      ['FIRST_LETTER', ''],
      ['SECOND_LETTER', ''],
      ['THIRD_LETTER', ''],
      ['FOURTH_LETTER', ''],
      ['FIFTH_LETTER', ''],
    ])
  );

  const onPlacedLettersChange = (key: string, value: string) => {
    const placedLettersCopy = placedLetters;
    placedLettersCopy.set(key, value);
    setPlacedLetters(new Map(placedLettersCopy));
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

    setPlacedLettersArray(a);
  }, [placedLetters]);

  return (
    <>
      <Grid item>
        <Typography>Placed Letters</Typography>
      </Grid>
      <Grid item>
        {Array.from(placedLetters.keys()).map((key: any) => (
          <TextField
            key={getKey()}
            variant="outlined"
            value={placedLetters.get(key)}
            inputProps={{
              min: 0,
              style: { textAlign: 'center', textTransform: 'uppercase', padding: '0.45rem' },
            }}
            style={{ maxWidth: '3rem', margin: '0.25rem', padding: '0.15rem' }}
            onChange={(e) => {
              onPlacedLettersChange(key, e.target.value.toUpperCase());
            }}
          />
        ))}
      </Grid>
    </>
  );
};

export default PlacedLetters;
