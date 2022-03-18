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
      a.push([1, placedLetters.get('FIRST_LETTER')]);
    }

    if (placedLetters.get('SECOND_LETTER') !== '') {
      a.push([2, placedLetters.get('SECOND_LETTER')]);
    }

    if (placedLetters.get('THIRD_LETTER') !== '') {
      a.push([3, placedLetters.get('THIRD_LETTER')]);
    }

    if (placedLetters.get('FOURTH_LETTER') !== '') {
      a.push([4, placedLetters.get('FOURTH_LETTER')]);
    }

    if (placedLetters.get('FIFTH_LETTER') !== '') {
      a.push([5, placedLetters.get('FIFTH_LETTER')]);
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
