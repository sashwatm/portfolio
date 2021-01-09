import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: colors['living-coral']
    },
    secondary: {
      main: colors['brilliant-blue']
    },
    background: {
      default: colors['dark-charcoal'],
      paper: colors['dark-charcoal']
    }
  },
  overrides: {
    MuiButton: {
      root: {
        margin: "2%"
      }
    },
    MuiPaper: {
      root: {
        padding: '20px',
      },
    },
    MuiTypography: {
      root: {
        padding: '1%',
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