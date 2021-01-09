import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import DencryptTypography from '../helpers/DencryptTypography'

const styles = (theme: any) => ({
  item: {
    TitleAlign: 'left' as const
  },
  paper: {
    height:'100%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'flex-end'
  }
});

function Title(props: any) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <DencryptTypography variant="h2">
          Reach Out
        </DencryptTypography>
      </Paper>
    </React.Fragment>
  );
}

Title.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Title);
