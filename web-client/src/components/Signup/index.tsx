import React from 'react';
import './styles.css';
import FormHeading from '../Headings';

const SignUp = () => {
  return (
    <section className="Signup-container">
      <FormHeading text="Sign up" />
      <SignUpForm />
    </section>
  );
}

const SignUpForm = React.lazy(() => import('../Forms/SignUpForm'));

export default SignUp;
