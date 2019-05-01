import React, { useState } from 'react';
import { GeneralLink } from '../Links';
import { connect } from 'react-redux';

import { signUpUser } from '../../store/user/actions';

interface IProps {
  signUpUserAction?: string
  dispatch: any
}

const SignUpForm = (props: IProps) => {
  const [errors, setErrors] = useState({})
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const formData = {
    firstname: firstName,
    lastname: lastName,
    email: email,
    password: password,
    password_confirmation: password,
    errors: errors,
  }


  const handleSignUpSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    props.dispatch(signUpUser(formData))
  }

  return (
    <Form
      variant="Form-group-vertical"
      onSubmit={handleSignUpSubmit}
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
      <Password
        value={passwordConfirmation}
        onChange={e => setPasswordConfirmation(e.target.value)}
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

const mapStateToProps = (response: any) => ({ response })

export default connect(mapStateToProps)(SignUpForm);
