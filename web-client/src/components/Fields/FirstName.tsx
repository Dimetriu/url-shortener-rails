import React from 'react';
import Field from './';

const firstNameProps = {
  label: "First Name",
  ofType: "text",
  inputVariant: "Form-input",
  labelVariantBefore: "Form-row-label label-before",
  labelVariantAfter: "Form-row-label label-after",
  wrapperVariant: "Form-row",
  hintText: "e.g: John",
  hintVariant: "Form-row-hint standard-hint"
};

const FirstName = () => {
  return <Field {...firstNameProps} />;
}

export default FirstName;
