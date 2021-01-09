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
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row' as const
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column' as const
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: '10vh',
      flexShrink: 0,
    },
    [theme.breakpoints.down('xs')]: {
      width: '50vh',
      flexShrink: 0,
    },
  },
  drawerPaper: {
    [theme.breakpoints.up('sm')]: {
      borderRight: 'none',
      width: '10vh',
      justifyContent: 'center',
      padding: theme.spacing(1),
      flexDirection: 'column' as const
    },
    [theme.breakpoints.down('xs')]: {
      borderBottom: 'none',
      width: '50vh',
      justifyContent: 'left',
      padding: theme.spacing(1),
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
