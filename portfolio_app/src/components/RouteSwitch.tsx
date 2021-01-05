import React from 'react'
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

import Home from './home/Home'
import About from './about/About'
import Projects from './projects/Projects'
import Contact from './contact/Contact'
import NotFound from './notFound/NotFound'

const styles = (theme: any) => ({

});

function RouteSwitch(props: any) {
  const { classes } = props;
  return (
    <main>
      <Switch>
        <Route exact path='/' render={(props) => <Home />} />
        <Route exact path='/about' render={(props) => <About />} />
        <Route exact path='/projects' render={(props) => <Projects />} />
        <Route exact path='/contact' render={(props) => <Contact />} />
        <Route component={NotFound} />
      </Switch>
    </main>
  )
}

RouteSwitch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RouteSwitch);
