import React from 'react';
import './Login.css';
import {
  Email,
  Password,
  Submit
} from '../Fields/index';

export default function Login () {
  return (
    <section className="Login-container">
      <h2>Log in</h2>

      <Form>
        <Email />
        <Password />
        <Submit />
      </Form>
    </section>
  );
}

const Form = React.lazy(() => import('../Forms/FormGroup'));
