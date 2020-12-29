import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { GitHub, Instagram, LinkedIn } from '@material-ui/icons';

const styles = (theme: any) => ({
  icons: {
    fontSize: 50
  },
});

function SocialMedia(props: any) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid item>
        <Link href="https://www.linkedin.com/in/sashwatm" target="_blank">
          <LinkedIn className={classes.icons} />
        </Link>
      </Grid>
      <Grid item>
        <Link href="https://github.com/sashwatm" target="_blank">
          <GitHub className={classes.icons} />
        </Link>
      </Grid>
      <Grid item>
        <Link href="https://www.instagram.com/kuku.sash" target="_blank">
          <Instagram className={classes.icons} />
        </Link>
      </Grid>
    </React.Fragment>
  );
}

SocialMedia.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialMedia);
