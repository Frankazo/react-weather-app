import React, { Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Home from './components/routes/Home'

const App = props => (
  <Fragment>
    <Route exact path='/' component={Home} />
  </Fragment>
)

export default withRouter(App)
