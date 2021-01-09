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
    [theme.breakpoints.up('md')]: {
      height: '100vh'
    }
  },
  grid: {
    width: '100%',
    height: '100%'
  }
});

const projectDefs = [
  {
    thumbnail: moneyplant,
    title: 'MoneyPlant' ,
    description: 'A personal wealth management app',
    link: 'https://www.moneyplant.world'
  },
  {
    thumbnail: thesis,
    title: 'High-Speed Turbulent Flow' ,
    description: 'Hybridization of compact and WENO schemes for simulation of turbulent flows with shocks',
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
