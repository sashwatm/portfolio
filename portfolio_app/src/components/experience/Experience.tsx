import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Title from './Title';
import ExperienceTimeline from './ExperienceTimeline';

const styles = (theme: any) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
  },
  grid: {
    width: '100%',
    height: '100%',
  },
});

function Experience(props: any) {
  const { classes } = props;
  return (
    <div id="experience" className={classes.root}>
      <Grid container className={classes.grid} justify="space-between" alignItems="stretch">
        <Grid item xs={12}>
          <Title />
        </Grid>
        <Grid item xs={12}>
          <ExperienceTimeline />
        </Grid>
      </Grid>
    </div>
  );
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);
