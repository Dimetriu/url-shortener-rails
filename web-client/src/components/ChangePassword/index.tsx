import React from 'react';
import '../Login/styles.css';
import { GeneralLink } from '../Links';
import FormHeading from '../Headings';

const ChangePassword = () => {
  return (
    <div className="Login-container">
      <FormHeading text="Provide a recovery email" />
      <Form>
        <Email />
        <Submit htmlValue="Send instructions" />
        <GeneralLink
          to="/login"
          text="Back to logging in"
          variant="mb-1-rem"
        />
      </Form>
    </div>
  );
}

const Form = React.lazy(() => import('../Forms'));
const Email = React.lazy(() => import('../Fields/Email'));
const Submit = React.lazy(() => import('../Fields/Submit'));

export default ChangePassword;
