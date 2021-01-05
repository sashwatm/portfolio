import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemIcon }  from '@material-ui/core';
import { Contacts, Home, EmojiPeople, Work } from '@material-ui/icons';

const styles = (theme: any) => ({

});

function Navigation(props: any) {
  const { classes } = props;
  return (
    <React.Fragment>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><Home /></ListItemIcon>
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemIcon><EmojiPeople /></ListItemIcon>
        </ListItem>
        <ListItem button component={Link} to="/projects">
          <ListItemIcon><Work /></ListItemIcon>
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemIcon><Contacts /></ListItemIcon>
        </ListItem>
    </List>
    </React.Fragment>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
