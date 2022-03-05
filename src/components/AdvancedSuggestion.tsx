import { useState } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { getARandomWordForStart } from '../service/words';

type AdvancedSuggestionProps = {
  isDisplayed: boolean;
};

const AdvancedSuggestion: React.FC<AdvancedSuggestionProps> = ({
  isDisplayed,
}: AdvancedSuggestionProps) => {
  const [randomSuggestion, setRandomSuggestion] = useState<String>(getARandomWordForStart());

  if (!isDisplayed) return <></>;

  return (
    <>
      <Grid item>
        <Button
          variant="contained"
          onClick={() => {
            setRandomSuggestion(getARandomWordForStart());
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
