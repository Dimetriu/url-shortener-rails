import React, { useState } from 'react';
import '../Login/styles.css';
import { GeneralLink } from '../Links';
import FormHeading from '../Headings';

const ChangePassword = () => {
  const [email, setEmail] = useState('')

  return (
    <div className="Login-container">
      <FormHeading text="Provide a recovery email" />
      <Form
        variant="Form-group-vertical"
        onSubmit={e => {
          e.preventDefault();
          console.log({ email });
        }}
      >
        <Email
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Submit htmlValue="Send me instructions" />

        <GeneralLink
          to="/login"
          text="Back to logging in"
          variant="Form-row"
        />
      </Form>
    </div>
  );
}

const Form = React.lazy(() => import('../Forms'));
const Email = React.lazy(() => import('../Fields/Email'));
const Submit = React.lazy(() => import('../Fields/Submit'));

export default ChangePassword;
