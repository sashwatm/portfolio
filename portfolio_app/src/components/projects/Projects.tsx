import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import DencryptTypography from '../helpers/DencryptTypography'
import RenenetCard from './cards/RenenetCard'

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
        <Grid container item xs={12}>
          <DencryptTypography variant="h2">
            Projects
          </DencryptTypography>
        </Grid>
        <Grid container item xs={12} sm={6} md={4}>
          <RenenetCard />
        </Grid>
      </Grid>
    </div>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
