import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon }  from '@material-ui/core';
import { GitHub, Instagram, LinkedIn } from '@material-ui/icons';

const styles = (theme: any) => ({

});

function SocialMedia(props: any) {
  const { classes } = props;
  return (
    <React.Fragment>
      <List>
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
};

export default withStyles(styles)(SocialMedia);
