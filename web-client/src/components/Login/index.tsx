import React from 'react';
import './styles.css';
import FormHeading from '../Headings';

const Login = () => {
  return (
    <section className="Login-container">
      <FormHeading text="Log in" />
      <LoginForm />
    </section>
  );
}

const LoginForm = React.lazy(() => import('../Forms/LoginForm'));

export default Login;
