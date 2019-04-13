import React from 'react';
import './styles.css';
import FormHeading from '../Headings';

const Login = () => {
  return (
    <section className="Signup-container">
      <FormHeading text="Sign up" />
      <SignUpForm />
    </section>
  );
}

const SignUpForm = React.lazy(() => import('./SignUpForm'));

export default Login;
