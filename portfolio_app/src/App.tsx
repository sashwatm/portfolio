import React from 'react';
import ResponsiveDrawer from './components/headers/ResponsiveDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';

import theme from './styles/theme'

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveDrawer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
