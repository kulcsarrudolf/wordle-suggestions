import { Grid, Chip, Typography, Alert } from '@mui/material';

type SuggestionsProps = {
  suggestions: Array<string>;
};

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions }: SuggestionsProps) => (
  <>
    <Grid item>
      <Typography>{`Results found: ${suggestions.length}`}</Typography>
    </Grid>
    <>
      {suggestions.length >= 1000 && (
        <Grid item>
          <Alert severity="warning">
            The suggestions are only displayed when the number of filtered words is less than 1000.
          </Alert>
        </Grid>
      )}
    </>
    {suggestions.length < 1000 && (
      <Grid item>
        {suggestions.map((word) => (
          <Chip
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

export default Suggestions;
