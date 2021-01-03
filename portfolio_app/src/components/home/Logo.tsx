import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import logo from '../../images/logo.svg';

const styles = (theme: any) => ({
  img: {
    maxHeight:'60vh',
    maxWidth:'100%'
  }
});

function Logo(props: any) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Paper>
          <img className={classes.img} src={logo} alt="sashwatm_logo"/>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logo);
