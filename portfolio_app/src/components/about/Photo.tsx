import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Avatar, Grid, Paper } from '@material-ui/core';

import headshot from '../../images/headshot.png';

const styles = (theme: any) => ({
  item: {
    textAlign: 'left' as const
  },
  avatar: {
      width: theme.spacing(50),
      height: theme.spacing(50),
  },
});

function Photo(props: any) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid item className={classes.item} xs={12}>
        <Paper>
          <Avatar className={classes.avatar} variant="circular" alt="Sashwat Mishra" src={headshot} />
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

Photo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Photo);
