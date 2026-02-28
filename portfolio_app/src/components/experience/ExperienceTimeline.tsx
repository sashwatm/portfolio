import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Box } from '@material-ui/core';
import colors from '../../styles/colors';

const styles = (theme: any) => ({
  paper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  role: {
    borderLeft: `3px solid ${colors['living-coral']}`,
    paddingLeft: theme.spacing(2),
  },
  company: {
    color: colors['living-coral'],
    fontWeight: 700,
  },
  roleTitle: {
    color: colors['limpet-shell'],
  },
  dates: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  },
  bullet: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(0.5),
  },
  bulletDot: {
    color: colors['living-coral'],
    marginRight: theme.spacing(1),
    marginTop: 2,
    flexShrink: 0,
    fontSize: '0.6rem',
    lineHeight: '1.6',
  },
});

const experiences = [
  {
    company: 'Meta',
    location: 'Sunnyvale, CA',
    role: 'Senior Tech Lead / Software Engineer — Horizon Engine Platform',
    dates: 'December 2021 – Present',
    bullets: [
      'Led cross-platform content delivery API optimization across 3 teams / 15 engineers, reducing p75 delivery latency from 50+s to under 5s.',
      'Drove systemic reliability regressions from 25% down to 0.5% over 2 years, coordinating initiatives across 5 teams / 30+ engineers.',
      'Led ground-up redesign of cross-service transitions: 12% latency improvement, fixed systemic risks affecting 1% of users, managed 5x on-call spike, shipped 100% rollout on time.',
      'Launched high-throughput matchmaking system achieving 100x throughput and 25% p75 latency improvements as primary technical decision-maker.',
      'Driving engineering excellence across 12 teams / 100+ engineers: 100% alert ack rates, 100% operational readiness, 90% test coverage.',
      'Mentored 7 software engineers to Staff level.',
    ],
  },
  {
    company: 'Amazon Web Services',
    location: 'Seattle, WA',
    role: 'Software Engineer — Migration Acceleration Services',
    dates: 'April 2019 – December 2021',
    bullets: [
      'Reduced read API latency 40% by building a fault-tolerant microservice optimizing data consistency across distributed storage layers.',
      'Led SEV investigations across 4 teams / 30 engineers → 80% reduction in repetitive load, consistent Cassandra backups, 100% elimination of indeterminate latency spikes.',
      'Reduced new region launch times 10% with an integrated observability framework adopted by 30 developers across 4 teams.',
      'Cut server deletion time from Cassandra by 85% via async workflow using AWS Step Functions and Lambda.',
      'Led scoping and design of mission-critical data ingestion service, reducing delivery time from 6 months to 1 month for a 10-engineer team.',
      'Mentored 3 engineers to mid-senior level.',
    ],
  },
  {
    company: 'Cummins',
    location: 'Columbus, IN',
    role: 'Team Lead / Software Engineer — Performance Analysis Tools',
    dates: 'August 2015 – March 2019',
    bullets: [
      'Led development of real-time engine analysis and visualization webapp resulting in $800k annual savings.',
      'Saved 95% of engine performance calibration time through a novel surface optimization approach, coordinating a team of 7 engineers.',
      'Increased build velocity for 4 apps by 16x by developing a Python continuous build framework.',
      'Mentored 2 engineers to mid-senior level.',
    ],
  },
];

function ExperienceTimeline(props: any) {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      {experiences.map((exp, i) => (
        <Box key={i} className={classes.role}>
          <Typography variant="h5" className={classes.company}>
            {exp.company} <Typography component="span" variant="body1" style={{ color: 'inherit', opacity: 0.75 }}>· {exp.location}</Typography>
          </Typography>
          <Typography variant="subtitle1" className={classes.roleTitle}>
            {exp.role}
          </Typography>
          <Typography variant="body2" className={classes.dates}>
            {exp.dates}
          </Typography>
          {exp.bullets.map((bullet, j) => (
            <Box key={j} className={classes.bullet}>
              <Typography className={classes.bulletDot}>&#9679;</Typography>
              <Typography variant="body1">{bullet}</Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Paper>
  );
}

ExperienceTimeline.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExperienceTimeline);
