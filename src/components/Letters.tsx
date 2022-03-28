import { TextField, Grid } from '@mui/material';
import { lettersToArray } from '../utils';

type LettersProps = {
  title: string;
  letters: Array<string>;
  setLetters: any;
};

const Letters: React.FC<LettersProps> = ({ title, letters, setLetters }: LettersProps) => {
  const onLettersChange = (e: any) => {
    setLetters(lettersToArray(e.target.value));
  };

  return (
    <Grid item>
      <TextField
        label={title}
        variant="outlined"
        value={letters.join('')}
        onChange={onLettersChange}
      />
    </Grid>
  );
};

export default Letters;
