import React from 'react';
import PropTypes from 'prop-types';
import { Button, InputAdornment, TextField, Typography } from '@material-ui/core';
import { AccountCircle, AlternateEmail, Send } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import DencryptTypography from '../helpers/DencryptTypography'

const styles = (theme: any) => ({
  paper: {
    padding: theme.spacing(1, 1),
    height:'100%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'flex-start'
  }
});

function Form(props: any) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <TextField
          id="input-with-icon-textfield"
          label="Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="input-with-icon-textfield"
          label="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmail />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="input-with-icon-textfield"
          label="Subject"
        />
        <TextField
          id="input-with-icon-textfield"
          label="Message"
          multiline
          rowsMax={5}
        />
        <Button variant="contained" color="primary" startIcon={<Send />}>
          Send
        </Button>
      </Paper>
    </React.Fragment>
  );
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
