import React from 'react';
import { Route } from 'react-router';

const Home = () => {
  return <h2>Home</h2>;
}

const AppRoutes = () => {
  return (
    <>
      <Route path= "/" exact component={Home} />
      <Route path="/login" render={() => <Login />} />
      <Route path="/signup" render={() => <Signup />} />
      <Route path="/forgot-password" render={() => <ChangePassword />} />
    </>
  );
}

const Login = React.lazy(() => import('../components/Login'));
const Signup = React.lazy(() => import('../components/Signup'));
const ChangePassword = React.lazy(() => import('../components/ChangePassword'));

export default AppRoutes;
