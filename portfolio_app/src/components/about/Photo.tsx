import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Avatar, Paper } from '@material-ui/core';

import headshot from '../../images/headshot.png';

const styles = (theme: any) => ({
  item: {
    textAlign: 'left' as const
  },
  avatar: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    borderRadius: 8,
  },
  paper: {
    height:'100%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

function Photo(props: any) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar} variant="square" alt="Sashwat Mishra" src={headshot} />
      </Paper>
    </React.Fragment>
  );
}

Photo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Photo);
