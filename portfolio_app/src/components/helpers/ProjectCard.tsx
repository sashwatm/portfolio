import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';

const styles = (theme: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100%',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1),
  },
  details: {
    display: 'flex',
    flexDirection: 'column' as const,
    flexGrow: 1,
  },
  content: {
    flex: '1 0 auto',
  },
  thumbnail: {
    height: 220,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#f5f5f5',
  }
});

function ProjectCard(props: any) {
  const { classes } = props;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.thumbnail}
        image={props.thumbnail}
        title={props.title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {props.description}
          </Typography>
        </CardContent>
        <div className={classes.actions}>
          <IconButton aria-label="view" href={props.link} target="_blank">
            <Visibility />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);
