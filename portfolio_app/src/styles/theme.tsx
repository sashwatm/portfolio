import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: colors['terracotta'],
    },
    secondary: {
      main: colors['steel-blue'],
    },
    background: {
      default: colors['background'],
      paper:   colors['surface'],
    },
    text: {
      primary:   colors['off-white'],
      secondary: colors['slate'],
    },
  },
  overrides: {
    MuiButton: {
      root: {
        margin: '2%',
      },
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
    },
  },
  props: {
    MuiPaper: {
      elevation: 0,
    },
  },
  typography: {
    fontFamily: ['Heebo', 'Arial'].join(','),
  },
});

export default theme;
