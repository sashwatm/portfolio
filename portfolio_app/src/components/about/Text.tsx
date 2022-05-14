import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const styles = (theme: any) => ({
  item: {
    textAlign: 'left' as const
  },
  paper: {
    height:'100%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'flex-start'
  }
});

function Text(props: any) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Typography variant="h5">
          I am a software engineer with experience in the tech and automotive industry.
        </Typography>
        <Typography variant="h5">
          On the backend, I have led work on large-scale, data-intensive distributed systems. I have also developed compute-intensive software
          like numerical solvers, data analyzers, and optimizers. On the frontend, I have built web and desktop clients.
        </Typography>
        <Typography variant="h5">
          I love coding, cars, and cooking.
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

Text.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Text);
