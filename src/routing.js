/* eslint space-before-function-paren: [2, "never"] */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from 'components/Home'
import Counter from 'components/Counter'

export default function AppRouting() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/counter' component={Counter} />
        </Switch>
      </Router>
    </div>
  )
}
