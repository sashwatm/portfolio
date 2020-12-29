import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = (theme: any) => ({
  icons: {
    fontSize: 50
  },
});

function Headline(props: any) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid item justify="center">
        <Typography variant="h2">
          Sashwat Mishra
        </Typography>
      </Grid>
      <Grid item justify="center">
        <Typography variant="h4">
          Software | Automotive | Gastronomy
        </Typography>
      </Grid>
    </React.Fragment>
  );
}

Headline.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Headline);
