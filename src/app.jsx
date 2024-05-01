/* eslint-disable no-nested-ternary */
import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from '@Components/common/PrivateRoute';
import Toast from '@Components/common/Toast';
import indexRoutes from './routes';
import Users from '@Components/common/User/user';
import Weather from '@Components/weather/weather';

function generateRoutes(routes) {
  return (
    <>
    <Switch>
      {routes.map((route) =>
        Array.isArray(route.component) ? (
          <Route path={route.path} key={route.name} exact={route.exact ?? false}>
            {generateRoutes(route.component)}
          </Route>
        ) : route.authenticated ? (
          <PrivateRoute component={route.component} exact={route.exact ?? false} path={route.path} key={route.name} />
        ) : (
          <Route component={route.component} exact={route.exact ?? false} path={route.path} key={route.name} />
        ),
      )}
    </Switch>

    </>
  );
}

function App() {
  return (
    <>
    <Users/>
    <div className="container">
      <Toast />
      <nav className="nav-wrapper">
        <ul>
          <li>
            <Link to="/actionloader">Loader</Link>
          </li>
          <li>
            <Link to="/topics">Topic</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      {generateRoutes(indexRoutes)}
    </div>
    <div className='naxatw-mt-6'>
      <Weather/>
    </div>
    
    </>
  );
}

export default hot(module)(App);
