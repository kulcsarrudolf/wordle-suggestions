import { useState } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { getAdvancedWordleSuggestion } from '../service/wordle-advanced-suggestions';

type AdvancedSuggestionProps = {
  suggestions: any;
};

const AdvancedSuggestion: React.FC<AdvancedSuggestionProps> = ({
  suggestions,
}: AdvancedSuggestionProps) => {
  const [randomSuggestion, setRandomSuggestion] = useState<String>('');

  return (
    <>
      <Grid item>
        <Button
          variant="contained"
          onClick={() => {
            setRandomSuggestion(getAdvancedWordleSuggestion(suggestions));
          }}
        >
          Get a suggestion
        </Button>
      </Grid>
      {randomSuggestion.length > 0 && (
        <Grid item>
          <Typography>Suggestion: {randomSuggestion}</Typography>
        </Grid>
      )}
    </>
  );
};

export default AdvancedSuggestion;
