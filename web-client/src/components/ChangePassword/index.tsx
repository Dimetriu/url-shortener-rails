import React from 'react';
import '../Login/styles.css';
import { Email, Submit } from '../Fields/index';
import { GeneralLink } from '../Links';
import FormHeading from '../Headings';

const ChangePassword = () => {
  return (
    <div className="Login-container">
      <FormHeading text="Provide a recovery email" />
      <Form>
        <Email />
        <GeneralLink
          to="/login"
          text="Back to logging in"
          variant="mb-1-rem"
        />
        <Submit />
      </Form>
    </div>
  );
}

const Form = React.lazy(() => import('../Forms'));

export default ChangePassword;
