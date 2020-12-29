import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import logo from '../../images/logo.svg';

const styles = (theme: any) => ({
  img: {
    width: 300,
    height: 300,
  },
});

function Logo(props: any) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid item>
        <img className={classes.img} src={logo} alt="sashwatm_logo" />
      </Grid>
    </React.Fragment>
  );
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logo);
