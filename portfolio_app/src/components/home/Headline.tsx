import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import DencryptTypography from '../helpers/DencryptTypography'

const styles = (theme: any) => ({
  item: {
    textAlign: 'left' as const
  }
});

function Headline(props: any) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid item className={classes.item} xs={12}>
        <Paper>
          <Typography variant="h2">
            Hi!
          </Typography>
          <DencryptTypography variant="h2">
            I'm Sashwat.
          </DencryptTypography>
          <Typography variant="h6">
            Full Stack Software Engineer
          </Typography>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

Headline.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Headline);
