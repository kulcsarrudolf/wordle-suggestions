import { useEffect, useState } from 'react';
import { Typography, TextField, Grid } from '@mui/material';
import { v4 as getKey } from 'uuid';

type PlacedLettersProps = {
  setPlacedLetters: any;
};

const PlacedLetters: React.FC<PlacedLettersProps> = ({ setPlacedLetters }: PlacedLettersProps) => {
  const [placedLettersInputValues, setPlacedLettersInputValues] = useState<any>(
    new Map([
      [1, ''],
      [2, ''],
      [3, ''],
      [4, ''],
      [5, ''],
    ])
  );

  const onPlacedLettersChange = (key: string, value: string) => {
    const placedLettersCopy = placedLettersInputValues;
    placedLettersCopy.set(key, value);
    setPlacedLettersInputValues(new Map(placedLettersCopy));
  };

  useEffect(() => {
    const currentPlacedLettersArray: Array<any> = [];

    Array.from(placedLettersInputValues.keys()).forEach((key: any) => {
      if (placedLettersInputValues.get(key) !== '') {
        currentPlacedLettersArray.push([key, placedLettersInputValues.get(key)]);
      }
    });

    setPlacedLetters(new Map(currentPlacedLettersArray));
  }, [placedLettersInputValues]);

  return (
    <>
      <Grid item>
        <Typography>Placed Letters</Typography>
      </Grid>
      <Grid item>
        {Array.from(placedLettersInputValues.keys()).map((key: any) => (
          <TextField
            key={getKey()}
            variant="outlined"
            value={placedLettersInputValues.get(key)}
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
