import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import { AccountCircle, AlternateEmail, Send } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

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
  const { value:subject, bind:bindSubject, reset:resetSubject } = useInput('');
  const { value:message, bind:bindMessage, reset:resetMessage } = useInput('');

  const handleSubmit = (event: any) => {
      event.preventDefault();
      alert(`Submitting Name ${name} ${email} ${subject} ${message}`);
      resetName();
      resetEmail();
      resetSubject();
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
          id="input-with-icon-textfield"
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
          id="input-with-icon-textfield"
          label="Subject"
          {...bindSubject}
        />
        <TextField
          id="input-with-icon-textfield"
          label="Message"
          multiline
          rowsMax={5}
          {...bindMessage}
        />
        <Button variant="contained" color="primary" startIcon={<Send />} onClick={handleSubmit}>
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
