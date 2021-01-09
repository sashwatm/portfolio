import React from 'react'
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

import ScrollableSinglePage from './ScrollableSinglePage'
import NotFound from './notFound/NotFound'

const styles = (theme: any) => ({

});

function RouteSwitch(props: any) {
  const { classes } = props;
  return (
    <main>
      <Switch>
        <Route exact path='/' render={(props) => <ScrollableSinglePage />} />
        <Route component={NotFound} />
      </Switch>
    </main>
  )
}

RouteSwitch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RouteSwitch);
