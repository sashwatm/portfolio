import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: colors['vibrant-yellow']
    },
    secondary: {
      main: colors['blue-depths']
    },
    background: {
      default: colors['dark-charcoal'],
      paper: colors['dark-charcoal']
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '8px',
      },
    }
  },
  props: {
    MuiPaper: {
      elevation: 0
    }
  },
  typography: {
    fontFamily: [
      'Heebo',
      'Arial'
    ].join(',')
  }
});

export default theme;