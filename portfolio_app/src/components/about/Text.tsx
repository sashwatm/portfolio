import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Grid, List, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core';

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
          <Typography variant="h5">
            I am a software engineer with experience in the tech and automotive industry.
          </Typography>
          <Typography variant="h5">
            On the backend, I have worked on computationally intensive software like
            numerical solvers, data analyzers, and optimizers. I have also built scalable
            distributed systems for cloud services.
          </Typography>
          <Typography variant="h5">
            On the frontend, I have built web and desktop clients for some of the
            backend systems I have developed.
          </Typography>
          <Typography variant="h5">
            I love cars, coding, and cooking.
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
