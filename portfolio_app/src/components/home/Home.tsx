import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, GridSpacing } from '@material-ui/core';

import Logo from './Logo';
import Headline from './Headline';
import SocialMedia from './SocialMedia';

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: '24px',
    maxWidth: '100%',
    maxHeight: '100%'
  }
});

function Home(props: any) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.grid} direction="column" justify="center" alignItems="stretch" spacing={10 as GridSpacing}>
        <Grid container item direction="row" justify="center" alignItems="stretch" spacing={5 as GridSpacing}>
          <SocialMedia />
        </Grid>
        <Grid container item direction="row" justify="center" alignItems="stretch">
          <Logo />
        </Grid>
        <Grid container item direction="column" justify="flex-start" alignItems="center">
          <Headline />
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
