import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './components/App'

ReactDOM.render(
  <Router basename="/">
    <Switch>
      <Route
        path="/prototype/:shareUrl"
        render={(props) => <App config={window.InVisionConfig} {...props} /> } />
    </Switch>
  </Router>, document.getElementById('root')
)
