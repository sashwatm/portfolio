import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { List, ListItem, ListItemIcon }  from '@material-ui/core';
import { Contacts, Home, EmojiPeople, Work } from '@material-ui/icons';

function Navigation(props: any) {
  return (
    <React.Fragment>
      <List>
        <ListItem button component={HashLink} smooth to="/#home">
          <ListItemIcon><Home /></ListItemIcon>
        </ListItem>
        <ListItem button component={HashLink} smooth to="/#about">
          <ListItemIcon><EmojiPeople /></ListItemIcon>
        </ListItem>
        <ListItem button component={HashLink} smooth to="/#projects">
          <ListItemIcon><Work /></ListItemIcon>
        </ListItem>
        <ListItem button component={HashLink} smooth to="/#contact">
          <ListItemIcon><Contacts /></ListItemIcon>
        </ListItem>
    </List>
    </React.Fragment>
  );
}

export default Navigation;
