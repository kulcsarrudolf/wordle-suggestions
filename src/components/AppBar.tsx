import { Typography, AppBar as MuiAppBar, Toolbar, IconButton } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

type AppBarProps = {
  onReset: () => void;
  onShowWarning: () => void;
};

const AppBar: React.FC<AppBarProps> = ({ onReset, onShowWarning }: AppBarProps) => (
  <MuiAppBar position="sticky">
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        Wordle Suggestions
      </Typography>
      <IconButton size="large" onClick={onReset} color="inherit">
        <RestartAltIcon />
      </IconButton>
      <IconButton size="large" onClick={onShowWarning} color="inherit">
        <InfoIcon />
      </IconButton>
      <IconButton
        size="large"
        onClick={() => window.open('https://github.com/kulcsarrudolf/wordle-suggestions', '_blank')}
        color="inherit"
      >
        <GitHubIcon />
      </IconButton>
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
