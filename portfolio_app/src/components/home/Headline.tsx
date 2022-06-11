import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import DencryptTypography from '../helpers/DencryptTypography'

const styles = (theme: any) => ({
  item: {
    textAlign: 'left' as const
  },
  paper: {
    height:'100%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center'
  }
});

function Headline(props: any) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Typography variant="h5">
          Hi!
        </Typography>
        <DencryptTypography variant="h2">
         I'm Sashwat,
        </DencryptTypography>
        <Typography variant="h5">
           a Software Engineer
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

Headline.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Headline);
