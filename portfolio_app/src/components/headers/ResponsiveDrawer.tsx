import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Navigation from './Navigation';
import SocialMedia from './SocialMedia';
import RouteSwitch from '../RouteSwitch';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row' as const
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column' as const
    },
  },
  drawer: {
    flexShrink: 0,
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
      width: '10vh'
    },
    [theme.breakpoints.down('xs')]: {
      height: '10vw',
      width: '100vw'
    }
  },
  drawerPaper: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      borderRight: 'none',
      height: '100vh',
      width: '10vh',
      justifyContent: 'center',
      flexDirection: 'column' as const
    },
    [theme.breakpoints.down('xs')]: {
      borderBottom: 'none',
      height: '10vw',
      width: '100vw',
      justifyContent: 'left',
      flexDirection: 'row' as const
    },
  },
  content: {
    flexGrow: 1,
  },
}));

function ResponsiveDrawer(props: any) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const drawerWideScreens = (
    <React.Fragment>
      <Navigation orientation='vertical'/>
      <Divider orientation='horizontal' variant='middle' />
      <SocialMedia orientation='vertical' />
    </React.Fragment>
  );

  const drawerNarrowScreens = (
    <React.Fragment>
      <Navigation orientation='horizontal'/>
      <Divider orientation='vertical' variant='middle' flexItem />
      <SocialMedia orientation='horizontal' />
    </React.Fragment>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="navigation social">
        <Hidden smUp implementation="css">
          <Drawer
            elevation={0}
            container={container}
            variant="permanent"
            anchor='top'
            open={true}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawerNarrowScreens}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            elevation={0}
            container={container}
            variant="permanent"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={true}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawerWideScreens}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <RouteSwitch />
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
