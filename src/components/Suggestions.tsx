import { useState, useEffect } from 'react';
import { Grid, Chip, Typography, Alert } from '@mui/material';

import { v4 as getKey } from 'uuid';

import AdvancedSuggestion from './AdvancedSuggestion';
import { getWordleSuggestions } from '../service/wordle-suggestions';

type SuggestionsProps = {
  filter: any;
};

const Suggestions: React.FC<SuggestionsProps> = ({ filter }: SuggestionsProps) => {
  const [suggestions, setSuggestions] = useState<Array<string>>([]);

  const { goodLetters, badLetters, placedLetters, yellowLetters } = filter;

  useEffect(() => {
    setSuggestions(getWordleSuggestions(goodLetters, badLetters, placedLetters, yellowLetters));
  }, [filter]);

  return (
    <>
      <AdvancedSuggestion filter={filter} />

      <Grid item>
        <Typography>{`Results found: ${suggestions.length}`}</Typography>
      </Grid>
      <>
        {suggestions.length >= 1000 && (
          <Grid item>
            <Alert severity="warning">
              The suggestions are only displayed when the number of filtered words is less than
              1000.
            </Alert>
          </Grid>
        )}
      </>
      {suggestions.length < 1000 && (
        <Grid item>
          {suggestions.map((word) => (
            <Chip
              key={getKey()}
              variant="filled"
              color="primary"
              size="medium"
              label={word}
              style={{ margin: '0.25rem' }}
            />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Suggestions;
