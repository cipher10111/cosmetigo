import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Auth from './pages/Auth';
import store from './redux/store';
import { fetchUser } from './redux/actions/userActions';
import Home from './pages/Home';

const App = () => {
  useEffect(() => {
    store.dispatch(fetchUser());
  });

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/auth' component={Auth} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
