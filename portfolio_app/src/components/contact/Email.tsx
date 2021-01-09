import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link, Paper } from '@material-ui/core';

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

function Email(props: any) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Typography variant="h3">
          Or,
        </Typography>
        <Typography variant="h3">
          send an email to
        </Typography>
        <Typography variant="h3">
          <Link href={"mailto:hey@sashwatmishra.com"}>hey@sashwatmishra.com</Link>
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

Email.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Email);
