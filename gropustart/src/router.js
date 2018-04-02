import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';

//import App from '.shared/containers/App/App';
import App from './shared/containers/App/App';
import asyncComponent from './helpers/AsyncFunc';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => isLoggedIn
      ? <Component {...props} />
      : <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
        />}
  />
);
const PublicRoutes = ({ history, isLoggedIn }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path={'/'}
          component={asyncComponent(() => import('./shared/containers/Singin/signin'))}
        />
        <Route
          exact
          path={'/signin'}
          component={asyncComponent(() => import('./shared/containers/Singin/signin'))}
        />

         <Route
          exact
          path={'/forgotPassword'}
          component={asyncComponent(() =>
            import('./shared/containers/ForgotPassword/forgotPassword'))}
        />

       {/* <Route
          exact
          path={'/profile'}
          component={asyncComponent(() =>
            import('./shared/containers/Profile/index'))}
        /> */}
        
         <Route
          exact
          path={'/signup'}
          component={asyncComponent(() => import('./shared/containers/SingUp/signup'))}
        />

        <RestrictedRoute
          path="/dashboard"
          component={App}
          isLoggedIn={isLoggedIn}
        />
        
        <RestrictedRoute
          path="/profile"
          component={App}
          isLoggedIn={isLoggedIn}
        />

        <RestrictedRoute
          path="/updatepassword"
          component={App}
          isLoggedIn={isLoggedIn}
        />
          <RestrictedRoute
          path="/profile"
          component={App}
          isLoggedIn={isLoggedIn}
        />

          <RestrictedRoute
          path="/mobileaccess"
          component={App}
          isLoggedIn={isLoggedIn}
        />

          <RestrictedRoute
          path="/ActiveProduction"
          component={App}
          isLoggedIn={isLoggedIn}
        />

          <RestrictedRoute
          path="/ArchivedProductions"
          component={App}
          isLoggedIn={isLoggedIn}
        />

          <RestrictedRoute
          path="/MotionTemplates"
          component={App}
          isLoggedIn={isLoggedIn}
        />

          <RestrictedRoute
          path="/UserManagement"
          component={App}
          isLoggedIn={isLoggedIn}
        />

          <RestrictedRoute
          path="/PlanDetails"
          component={App}
          isLoggedIn={isLoggedIn}
        />
        
        <RestrictedRoute
          path="/Tutorial"
          component={App}
          isLoggedIn={isLoggedIn}
        />
          
      </div>
    </ConnectedRouter>
  );
};

export default connect(state => ({
  isLoggedIn: state.Auth.get('idToken') !== null,
}))(PublicRoutes);
