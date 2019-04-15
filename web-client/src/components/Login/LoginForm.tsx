import React from 'react';
import { GeneralLink } from '../Links';

const LoginForm = () => {
  return (
    <Form>
      <Email />
      <Password />
      <Submit htmlValue="Log in" />
      <GeneralLink
        to="/forgot-password"
        text="Forgot your password?"
      />
      <p style={{ color: '#9B9B9B' }}>
        Don't have an account? {createAccout}
      </p>
    </Form>
  );
}

const createAccout = (
  <GeneralLink
    to="/signup"
    text="Create one"
    variant="mb-1-rem"
  />
);

const Form = React.lazy(() => import('../Forms'));
const Email = React.lazy(() => import('../Fields/Email'));
const Password = React.lazy(() => import('../Fields/Password'));
const Submit = React.lazy(() => import('../Fields/Submit'));

export default LoginForm;
