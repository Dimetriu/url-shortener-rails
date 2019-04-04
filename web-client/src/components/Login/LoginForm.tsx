import React from 'react';
import {
  Email,
  Password,
  Submit
} from '../Fields/index';

const LoginForm = () => {
  return (
    <>
      <Form>
        <Email />
        <Password />
        <Submit />
      </Form>
    </>
  );
}

const Form = React.lazy(() => import('../Forms/FormGroup'));

export default LoginForm;
