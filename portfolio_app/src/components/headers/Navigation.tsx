import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { HashLink } from 'react-router-hash-link';
import { List, ListItem, ListItemIcon }  from '@material-ui/core';
import { Contacts, Home, EmojiPeople, Work, Timeline } from '@material-ui/icons';

const styles = (theme: any) => ({
   horizontalList: {
     display: 'flex',
     flexDirection: 'row' as const,
     padding: 0,
   },
   verticalList: {
     display: 'flex',
     flexDirection: 'column' as const,
     padding: 0,
   }
});

function Navigation(props: any) {
  const { classes, orientation } = props;
  const listClassName = orientation === 'horizontal' ? classes.horizontalList : classes.verticalList
  return (
    <React.Fragment>
      <List className={listClassName}>
        <ListItem button component={HashLink} smooth to="/#home">
          <ListItemIcon><Home /></ListItemIcon>
        </ListItem>
        <ListItem button component={HashLink} smooth to="/#about">
          <ListItemIcon><EmojiPeople /></ListItemIcon>
        </ListItem>
        <ListItem button component={HashLink} smooth to="/#experience">
          <ListItemIcon><Timeline /></ListItemIcon>
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

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  orientation: PropTypes.string
};

export default withStyles(styles)(Navigation);
