import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import colors from '../../styles/colors';

const styles = (theme: any) => ({
  paper: {
    height: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  card: {
    padding: theme.spacing(3),
    borderTop: `3px solid ${colors['living-coral']}`,
    height: '100%',
  },
  company: {
    color: colors['living-coral'],
    fontWeight: 700,
    marginBottom: theme.spacing(0.5),
  },
  role: {
    color: colors['limpet-shell'],
    marginBottom: theme.spacing(0.5),
  },
  dates: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1.5),
  },
  description: {},
});

const experiences = [
  {
    company: 'Meta',
    role: 'Tech Lead / Software Engineer',
    dates: 'Dec 2021 – Present',
    description: 'Defining and executing multi-year technical strategy for core platform systems on Horizon Engine Platform.',
  },
  {
    company: 'Amazon Web Services',
    role: 'Software Engineer',
    dates: 'Apr 2019 – Dec 2021',
    description: 'Built distributed data services and observability tooling for cloud migration at scale.',
  },
  {
    company: 'Cummins',
    role: 'Team Lead / Software Engineer',
    dates: 'Jun 2014 – Dec 2014, Aug 2015 – Mar 2019',
    description: 'Led development of real-time performance analysis tools for diesel engine R&D.',
  },
];

function ExperienceTimeline(props: any) {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        {experiences.map((exp, i) => (
          <Grid item key={i} xs={12} md={4}>
            <Paper elevation={2} className={classes.card}>
              <Typography variant="h5" className={classes.company}>
                {exp.company}
              </Typography>
              <Typography variant="subtitle1" className={classes.role}>
                {exp.role}
              </Typography>
              <Typography variant="body2" className={classes.dates}>
                {exp.dates}
              </Typography>
              <Typography variant="body1" className={classes.description}>
                {exp.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

ExperienceTimeline.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExperienceTimeline);
