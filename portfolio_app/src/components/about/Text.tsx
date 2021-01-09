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
          I am a software engineer with 6.5 years of experience in the tech and automotive industry.
        </Typography>
        <Typography variant="h5">
          On the backend, I work on large-scale distributed systems for cloud services,
          specifically Amazon Web Services (AWS). I have also worked on data intensive software
          like numerical solvers, data analyzers, and optimizers.
        </Typography>
        <Typography variant="h5">
          On the frontend, I have built web and desktop clients for some of the
          backend systems I have developed.
        </Typography>
        <Typography variant="h5">
          I love cars, coding, and cooking.
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

Text.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Text);
