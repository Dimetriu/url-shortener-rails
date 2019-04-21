import React, { useState } from 'react';
import { GeneralLink } from '../Links';

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const formData = {
    email: email,
    password: password,
  }

  const handleLoginSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <Form
      variant="Form-group-vertical"
      onSubmit={handleLoginSubmit}
    >
      <Email
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Password
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <GeneralLink
        to="/forgot-password"
        text="Forgot password?"
        variant="Form-row"
      />

      <Submit htmlValue="Log in" />

      <p style={{ color: '#9B9B9B' }}>
        Don't have an Account?&nbsp;

        <GeneralLink
          to="/signup"
          text="Create One"
        />
      </p>
    </Form>
  );
}

const Form = React.lazy(() => import('.'))
const Email = React.lazy(() => import('../Fields/Email'))
const Password = React.lazy(() => import('../Fields/Password'))
const Submit = React.lazy(() => import('../Fields/Submit'))

export default LoginForm;
