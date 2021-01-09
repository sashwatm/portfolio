import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import { AccountCircle, AlternateEmail, Send } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const axios = require('axios');

const styles = (theme: any) => ({
  paper: {
    padding: theme.spacing(1, 1),
    height:'100%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'flex-start'
  }
});

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event: any) => {
        setValue(event.target.value);
      }
    }
  };
};

function Form(props: any) {
  const { classes } = props;

  const { value:name, bind:bindName, reset:resetName } = useInput('');
  const { value:email, bind:bindEmail, reset:resetEmail } = useInput('');
  const { value:message, bind:bindMessage, reset:resetMessage } = useInput('');

  const handleSubmit = (event: any) => {
      event.preventDefault();
      axios.post('https://tpx9nfe2ai.execute-api.us-west-2.amazonaws.com/prod/emails', {
        name: name,
        email: email,
        content: message
      })
      .then(function (response: any) { console.log('Success sending message'); })
      .catch(function (error: any) { console.log('Failed sending message'); console.log(error); console.log(error.message); });
      resetName();
      resetEmail();
      resetMessage();
  }

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
          {...bindName}
        />
        <TextField
          label="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmail />
              </InputAdornment>
            ),
          }}
          {...bindEmail}
        />
        <TextField
          label="Message"
          multiline
          rowsMax={5}
          {...bindMessage}
        />
        <Button variant="contained" color="secondary" startIcon={<Send />} onClick={handleSubmit}>
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
