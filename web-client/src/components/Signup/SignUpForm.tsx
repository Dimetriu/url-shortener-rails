import React from 'react';
import { GeneralLink } from '../Links';

const LoginForm = () => {
  return (
    <Form>
      <FirstName />
      <LastName />
      <Email />
      <Password />
      <Submit htmlValue="Sign up" />
      <p
        style={{ color: '#9B9B9B' }}
      >
        Have an account? {login}
      </p>
    </Form>
  );
}

const login = (
  <GeneralLink
    to="/login"
    text="Log in"
    variant="mb-1-rem"
  />
);

const Form = React.lazy(() => import('../Forms'));
const FirstName = React.lazy(() => import('../Fields/FirstName'));
const LastName = React.lazy(() => import('../Fields/LastName'));
const Email = React.lazy(() => import('../Fields/Email'));
const Password = React.lazy(() => import('../Fields/Password'));
const Submit = React.lazy(() => import('../Fields/Submit'));

export default LoginForm;
