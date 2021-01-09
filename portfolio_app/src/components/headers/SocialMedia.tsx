import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon }  from '@material-ui/core';
import { GitHub, Instagram, LinkedIn } from '@material-ui/icons';

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

function SocialMedia(props: any) {
  const { classes, orientation } = props;
  const listClassName = orientation === 'horizontal' ? classes.horizontalList : classes.verticalList
  return (
    <React.Fragment>
      <List className={listClassName}>
        <ListItem button component="a" href="https://www.linkedin.com/in/sashwatm" target="_blank">
          <ListItemIcon><LinkedIn /></ListItemIcon>
        </ListItem>
        <ListItem button component="a" href="https://github.com/sashwatm" target="_blank">
          <ListItemIcon><GitHub /></ListItemIcon>
        </ListItem>
        <ListItem button component="a" href="https://www.instagram.com/kuku.sash" target="_blank">
          <ListItemIcon><Instagram /></ListItemIcon>
        </ListItem>
    </List>
    </React.Fragment>
  );
}

SocialMedia.propTypes = {
  classes: PropTypes.object.isRequired,
  orientation: PropTypes.string
};

export default withStyles(styles)(SocialMedia);
