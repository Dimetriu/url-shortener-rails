import React from 'react';
import Field from './';

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

const Password = () => {
  return <Field {...passwordProps} />;
}

export default Password;
