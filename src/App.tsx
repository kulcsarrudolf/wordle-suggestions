import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme();

const App = () => <ThemeProvider theme={theme}>Wordle Suggestions</ThemeProvider>;

export default App;
