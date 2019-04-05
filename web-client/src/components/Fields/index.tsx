import React from 'react';
import Field from './Field';
import './Field.css';

const emailProps = {
  label: "Email",
  ofType: "text",
  inputVariant: "Form-input",
  labelVariantBefore: "Form-row-label label-before",
  labelVariantAfter: "Form-row-label label-after",
  wrapperVariant: "Form-row",
  hintText: "e.g: example@mail.com",
  hintVariant: "Form-row-hint standard-hint"
};

const passwordProps = {
  label: "Password",
  ofType: "password",
  inputVariant: "Form-input",
  labelVariantBefore: "Form-row-label label-before",
  labelVariantAfter: "Form-row-label label-after",
  wrapperVariant: "Form-row",
  hintText: "Minimum 8 characters",
  hintVariant: "Form-row-hint standard-hint"
};

const submitProps = {
  htmlValue: "Log in",
  ofType: "submit",
  inputVariant: "Primary-btn Form-action",
  wrapperVariant: "Form-row",
}

export const Email = () => {
  return  <Field {...emailProps} />;
}

export const Password = () => {
  return  <Field {...passwordProps} />;
}

export const Submit = () => {
  return <Field {...submitProps} />;
}
