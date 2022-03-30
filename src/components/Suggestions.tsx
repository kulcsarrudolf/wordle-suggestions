import { Grid, Chip, Typography, Alert } from '@mui/material';

import { v4 as getKey } from 'uuid';

import AdvancedSuggestion from './AdvancedSuggestion';

type SuggestionsProps = {
  suggestions: any;
};

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions }: SuggestionsProps) => {
  return (
    <>
      <AdvancedSuggestion suggestions={suggestions} />

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
          {suggestions.map((word: string) => (
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
