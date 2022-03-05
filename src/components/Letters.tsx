import { TextField, Grid } from '@mui/material';

type LettersProps = {
  title: string;
  letters: Array<string>;
  setLetters: any;
};

const Letters: React.FC<LettersProps> = ({ title, letters, setLetters }: LettersProps) => {
  const lettersToArray = (lettersString: string) => {
    let x = Array.from(lettersString);
    x = x.map((letter) => letter.toUpperCase());
    return [...new Set(x)];
  };

  const onLettersChange = (e: any) => {
    setLetters(lettersToArray(e.target.value));
  };

  return (
    <>
      <Grid item>
        <TextField
          label={title}
          variant="outlined"
          value={letters.join('')}
          onChange={onLettersChange}
        />
      </Grid>
    </>
  );
};

export default Letters;
