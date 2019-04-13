import React from 'react';
import Field from './';

const lastNameProps = {
  label: "Last Name",
  ofType: "text",
  inputVariant: "Form-input",
  labelVariantBefore: "Form-row-label label-before",
  labelVariantAfter: "Form-row-label label-after",
  wrapperVariant: "Form-row",
  hintText: "e.g: Doe",
  hintVariant: "Form-row-hint standard-hint"
};

const LastName = () => {
  return <Field {...lastNameProps} />;
}

export default LastName;
