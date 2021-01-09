import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ScrollableSinglePage from './ScrollableSinglePage'
import NotFound from './notFound/NotFound'

function RouteSwitch(props: any) {
  return (
    <main>
      <Switch>
        <Route exact path='/' render={(props) => <ScrollableSinglePage />} />
        <Route component={NotFound} />
      </Switch>
    </main>
  )
}

export default RouteSwitch;
