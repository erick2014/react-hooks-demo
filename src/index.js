// import react dependencies
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router-dom'

// Redux stuff
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { routerReducer, routerMiddleware } from 'react-router-redux'
// main app component
import Home from 'components/Home/Home.jsx'
import Contact from 'components/Contact/Contact.jsx'

import thunkMiddleware from 'redux-thunk'

// import reducers
import usersReducer from 'reduxConfig/reducers/users'

// import general styles
require('./assets/stylesheets/styles.scss')

const mainReducer = combineReducers({
  users: usersReducer,
  routing: routerReducer
})

const history = createBrowserHistory()

const store = createStore(
  mainReducer,
  undefined,
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

class App extends Component {
  render () {
    return (
      <div>
        <Route exact path='/home' component={Home} />
        <Route exact path='/contact' component={Contact} />
      </div>
    )
  }
}

const MyApp = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  )
}

// render our App componnet and mount it to our #root element
ReactDOM.render(<MyApp />, document.getElementById('root'))
