import React from 'react';
import RouteSwitch from './components/RouteSwitch';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';

import theme from './styles/theme'

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouteSwitch />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
