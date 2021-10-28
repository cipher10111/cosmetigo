import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import Auth from './pages/Auth'
import store from './redux/store'
import { logout, fetchUser } from './redux/actions/userActions'

const App = () => {
  useEffect(() => {
    store.dispatch(fetchUser())
  })
  const handleLogout = () => {
    store.dispatch(logout())
    document.location.href = '/auth'
  }

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
            <button onClick={handleLogout}>Logout</button>
          </Route>
          <Route path="/auth" component={Auth} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
