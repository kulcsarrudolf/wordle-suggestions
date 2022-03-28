import { useEffect, useState } from 'react';

import { Checkbox, FormControlLabel, FormGroup, Grid, TextField } from '@mui/material';

import { getSuffixForNumber, lettersToArray } from '../utils';

type YellowLettersProps = {
  setYellowLetters: any;
};

const YellowLetters: React.FC<YellowLettersProps> = ({ setYellowLetters }: YellowLettersProps) => {
  const [showYellowLetters, setShowYellowLetters] = useState<boolean>(false);

  const [yellowLettersInputValues, setYellowLettersInputValue] = useState<any>(
    new Map([
      [1, []],
      [2, []],
      [3, []],
      [4, []],
      [5, []],
    ])
  );

  const onYellowLettersChange = (key: string, value: string) => {
    const arrayValue = lettersToArray(value);
    const yellowLettersInputValuesCopy = yellowLettersInputValues;
    yellowLettersInputValuesCopy.set(key, arrayValue);
    setYellowLettersInputValue(new Map(yellowLettersInputValuesCopy));
  };

  useEffect(() => {
    setYellowLetters(yellowLettersInputValues);
  }, yellowLettersInputValues);

  return (
    <Grid item>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              value={showYellowLetters}
              onChange={() => setShowYellowLetters((prev) => !prev)}
            />
          }
          label="Show Yellow Letters Box"
        />
      </FormGroup>
      {showYellowLetters && (
        <Grid
          container
          spacing={2}
          direction="column"
          sx={{
            mt: '1rem',
            padding: '0rem 16px 16px 0rem',
            border: '1px solid yellow',
          }}
        >
          {Array.from(yellowLettersInputValues.keys()).map((key: any) => {
            return (
              <Grid item>
                <TextField
                  label={`${getSuffixForNumber(key)} place`}
                  value={yellowLettersInputValues.get(key).join('')}
                  onChange={(e) => {
                    const currentValue = e.target.value;
                    onYellowLettersChange(key, currentValue);
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Grid>
  );
};

export default YellowLetters;
