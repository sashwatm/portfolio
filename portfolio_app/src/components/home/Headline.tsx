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
        <DencryptTypography variant="h2">
         I am Sashwat,
        </DencryptTypography>
        <Typography variant="h5">
           Tech Lead · Distributed Systems &amp; Platform Engineering
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

Headline.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Headline);
