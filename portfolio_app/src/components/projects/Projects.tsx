import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import ProjectCard from '../helpers/ProjectCard'
import Title from './Title'

import moneyplant from '../../images/projects/moneyplant.png'
import thesis from '../../images/projects/thesis.png'

const styles = (theme: any) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
  },
  grid: {
    width: '100%',
    height: '100%'
  }
});

const projectDefs = [
  {
    thumbnail: moneyplant,
    title: 'MoneyPlant',
    description: 'A full-stack personal wealth management platform for tracking assets, liabilities, and net worth over time. Built on a fully serverless AWS architecture: Python Lambda functions behind API Gateway, DynamoDB with Streams powering an event-driven aggregation pipeline that recalculates net worth, converts across 150+ fiat currencies and 500+ cryptocurrencies, and checks milestone thresholds on every data change. The React/Redux frontend is served via S3 and CloudFront, authenticated through Cognito, and integrated with Stripe for tiered subscription management. Additional features include a FIRE calculator, customizable financial reminders, and milestone celebration emails via SES. All infrastructure is defined as code with AWS CDK.',
    link: 'https://www.moneyplant.world'
  },
  {
    thumbnail: thesis,
    title: "Master's Thesis: High-Speed Turbulent Flow",
    description: 'Computational research at Purdue University, sponsored by the NSF PetaApps program and run on Purdue\'s HPC cluster. Simulating high-speed turbulent flows with shocks presents a fundamental numerical conflict: shock-capturing schemes like WENO resolve discontinuities by introducing artificial dissipation, but that same dissipation corrupts the turbulent energy cascade away from the shock. This research devised a hybrid numerical method pairing a 6th-order compact scheme (spectrally accurate, minimally dissipative) with multiple WENO variants, using a shock detector to dynamically switch between the two at runtime. The result achieves sharp shock resolution where needed while preserving turbulence fidelity in smooth regions, with applications to jet noise prediction. Validated against fine-grid benchmarks including the Shu-Osher problem, quasi-1D nozzle flow, and 2D shock-vortex interaction.',
    link: 'https://www.proquest.com/docview/1734881663'
  }
]

function Projects(props: any) {
  const { classes } = props;
  return (
    <div id="projects" className={classes.root}>
      <Grid container className={classes.grid} justify="space-between" alignItems="stretch">
        <Grid item xs={12}>
          <Title />
        </Grid>
        {projectDefs.map((definition, idx) => (
          <Grid item key={idx} xs={12} md={6}>
            <ProjectCard {...definition} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
