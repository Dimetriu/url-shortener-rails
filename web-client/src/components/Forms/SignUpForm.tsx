import React, { useState } from 'react';
import { GeneralLink } from '../Links';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const formData = {
    firstname: firstName,
    lastname: lastName,
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
      <FirstName
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <LastName
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <Email
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Password
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <Submit htmlValue="Sign up" />

      <p style={{ color: '#9B9B9B' }}>
        Have an Account?&nbsp;

        <GeneralLink
          to="/login"
          text="Log in"
        />
      </p>
    </Form>
  );
}

const Form = React.lazy(() => import('.'))
const FirstName = React.lazy(() => import('../Fields/FirstName'))
const LastName = React.lazy(() => import('../Fields/LastName'))
const Email = React.lazy(() => import('../Fields/Email'))
const Password = React.lazy(() => import('../Fields/Password'))
const Submit = React.lazy(() => import('../Fields/Submit'))

export default SignUpForm;
