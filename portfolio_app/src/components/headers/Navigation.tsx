import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { HashLink } from 'react-router-hash-link';
import { List, ListItem, Typography } from '@material-ui/core';
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
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1.5, 0),
  },
  navLabel: {
    fontSize: '0.6rem',
    marginTop: 2,
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    opacity: 0.8,
  },
});

const navItems = [
  { to: '/#home',       icon: <Home fontSize="small" />,       label: 'Home' },
  { to: '/#about',      icon: <EmojiPeople fontSize="small" />, label: 'About' },
  { to: '/#experience', icon: <Timeline fontSize="small" />,    label: 'Experience' },
  { to: '/#projects',   icon: <Work fontSize="small" />,        label: 'Projects' },
  { to: '/#contact',    icon: <Contacts fontSize="small" />,    label: 'Contact' },
];

function Navigation(props: any) {
  const { classes, orientation } = props;
  const listClassName = orientation === 'horizontal' ? classes.horizontalList : classes.verticalList;

  return (
    <List className={listClassName}>
      {navItems.map(({ to, icon, label }) => (
        <ListItem key={to} button component={HashLink} smooth to={to} className={classes.navItem}>
          {icon}
          <Typography className={classes.navLabel}>{label}</Typography>
        </ListItem>
      ))}
    </List>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  orientation: PropTypes.string,
};

export default withStyles(styles)(Navigation);
