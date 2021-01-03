import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, GridSpacing } from '@material-ui/core';

import Logo from './Logo';
import Headline from './Headline';

const styles = (theme: any) => ({
  root: {
    width: '100%',
    height: '100vh'
  },
  grid: {
    width: '100%',
    height: '100%'
  }
});

function Home(props: any) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.grid} justify="space-between" alignItems="stretch">
        <Grid container item xs={12} md={6}>
          <Logo />
        </Grid>
        <Grid container item xs={12} md={6}>
          <Headline />
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
