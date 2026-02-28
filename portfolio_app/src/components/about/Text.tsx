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
        <Typography variant="body1">
          I have spent my 11 years of career building mission-critical platforms at Meta and AWS
          that have to be reliable, fast, and scalable by design.
        </Typography>
        <Typography variant="body1">
          I am most in my element on hard, ambiguous platform problems that cut across teams, translating messy technical
          reality into clear long-term direction and executing on it. I am also recognized for growing engineering talent,
          having helped engineers at every level develop into strong technical leaders.
        </Typography>
        <Typography variant="body1">
          Outside of work, I love cars, cooking, and traveling.
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

Text.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Text);
