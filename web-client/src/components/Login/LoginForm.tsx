import React from 'react';
import {
  Email,
  Password,
  Submit
} from '../Fields/index';
import { GeneralLink } from '../Links';

const LoginForm = () => {
  return (
    <Form>
      <Email />
      <Password />
      <GeneralLink
        to="/forgot-password"
        text="Forgot your password?"
      />
      <Submit />
    </Form>
  );
}

const Form = React.lazy(() => import('../Forms'));

export default LoginForm;
