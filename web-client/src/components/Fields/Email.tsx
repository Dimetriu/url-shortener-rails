import React from 'react';
import Field from './';

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

const Email = () => {
  return <Field {...emailProps} />;
}

export default Email;
