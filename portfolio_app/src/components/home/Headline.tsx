import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

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
          <Typography variant="h2">
            I'm Sashwat.
          </Typography>
          <Typography variant="subtitle1">
            Software Engineer
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
