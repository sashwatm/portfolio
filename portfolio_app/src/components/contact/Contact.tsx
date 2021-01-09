import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Form from './Form'
import Title from './Title'

const styles = (theme: any) => ({
  root: {
    width: '100%',
    height: '100vh'
  },
  grid: {
    width: '100%',
    height: '100%'
  }
});

function Contact(props: any) {
  const { classes } = props;
  return (
    <div id="contact" className={classes.root}>
      <Grid container className={classes.grid} justify="space-between" alignItems="stretch">
        <Grid item xs={12}>
          <Title />
        </Grid>
        <Grid item xs={6}>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
