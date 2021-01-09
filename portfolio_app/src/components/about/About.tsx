import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Photo from './Photo'
import Text from './Text'
import Title from './Title'

const styles = (theme: any) => ({
  root: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      height: '100vh'
    }
  },
  grid: {
    width: '100%',
    height: '100%'
  }
});

function About(props: any) {
  const { classes } = props;
  return (
    <div id="about" className={classes.root}>
      <Grid container className={classes.grid} justify="space-between" alignItems="stretch">
        <Grid item xs={12}>
          <Title />
        </Grid>
        <Grid item xs={12} md={6}>
          <Photo />
        </Grid>
        <Grid item xs={12} md={6}>
          <Text />
        </Grid>
      </Grid>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
