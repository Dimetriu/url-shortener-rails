import React from 'react';
import { Route } from 'react-router';

const Home = () => {
  return <h2>Home</h2>;
}

const AppRoutes = () => {
  return (
    <>
      <Route path= "/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgot-password" component={ChangePassword} />
    </>
  );
}

const Login = React.lazy(() => import('../components/Login'));
const Signup = React.lazy(() => import('../components/Signup'));
const ChangePassword = React.lazy(() => import('../components/ChangePassword'));

export default AppRoutes;
