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

function Text(props: any) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid item className={classes.item} xs={12}>
        <Paper>
          <Typography variant="h2">
            whoami
          </Typography>
          <Typography variant="subtitle1">
            I am who!
          </Typography>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

Text.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Text);
