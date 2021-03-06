import { ThemeProvider, CssBaseline } from '@mui/material';

import { createTheme } from '@mui/material/styles';

import Main from './components/Main';

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Main />
  </ThemeProvider>
);

export default App;
