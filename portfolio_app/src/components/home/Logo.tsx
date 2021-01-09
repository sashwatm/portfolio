import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import logo from '../../images/logo.svg';

const styles = (theme: any) => ({
  img: {
    maxHeight:'60vh',
    maxWidth:'100%'
  },
  paper: {
    height:'100%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center'
  }
});

function Logo(props: any) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <img className={classes.img} src={logo} alt="sashwatm_logo"/>
      </Paper>
    </React.Fragment>
  );
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logo);
