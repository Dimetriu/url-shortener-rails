import React from 'react';
import Field from './Field';
import './Fields.css';

export const Email = () => {
  return (
    <Field
      label="Email"
      ofType="text"
      inputVariant="Form-input"
      wrapperVariant="Form-row"
    />
  );
}

export const Password = () => {
  return (
    <Field
      label="Password"
      ofType="password"
      inputVariant="Form-input"
      wrapperVariant="Form-row"
    />
  );
}

export const Submit = () => {
  return (
    <Field
      htmlValue="Log in"
      ofType="submit"
      inputVariant="Primary-btn Form-action"
      wrapperVariant="Form-row"
    />
  );
}
