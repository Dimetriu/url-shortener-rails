import React from 'react';
import './styles.css';

const Login = () => {
  return (
    <section className="Login-container">
      <h2>Log in</h2>
      <LoginForm />
    </section>
  );
}

const LoginForm = React.lazy(() => import('./LoginForm'));

export default Login;
