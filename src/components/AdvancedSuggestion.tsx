import { useState } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { getAdvancedWordleSuggestion } from '../service/wordle-advanced-suggestions';

type AdvancedSuggestionProps = {
  filter: any;
};

const AdvancedSuggestion: React.FC<AdvancedSuggestionProps> = ({
  filter,
}: AdvancedSuggestionProps) => {
  const [randomSuggestion, setRandomSuggestion] = useState<String>(
    getAdvancedWordleSuggestion([], [], new Map([]), new Map([]))
  );

  return (
    <>
      <Grid item>
        <Button
          variant="contained"
          onClick={() => {
            setRandomSuggestion(
              getAdvancedWordleSuggestion(
                filter.goodLetters,
                filter.badLetters,
                filter.placedLetters,
                filter.yellowLetters
              )
            );
          }}
        >
          Get a suggestion
        </Button>
      </Grid>
      <Grid item>
        <Typography>Suggestion: {randomSuggestion}</Typography>
      </Grid>
    </>
  );
};

export default AdvancedSuggestion;
