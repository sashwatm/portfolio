import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, GridSpacing } from '@material-ui/core';

import Text from './Text'

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

function Projects(props: any) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.grid} justify="space-between" alignItems="stretch">
        <Grid container item xs={12} md={6}>
          <Text />
        </Grid>
        <Grid container item xs={12} md={6}>
          <p>Cards go here!</p>
        </Grid>
      </Grid>
    </div>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
