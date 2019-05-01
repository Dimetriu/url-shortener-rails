// import React from 'react';
// import Field from './';

// const lastNameProps = {
//   label: "Last Name",
//   ofType: "text",
//   inputVariant: "Form-input",
//   labelVariantBefore: "Form-row-label label-before",
//   labelVariantAfter: "Form-row-label label-after",
//   wrapperVariant: "Form-row",
//   hintText: "e.g: Doe",
//   hintVariant: "Form-row-hint standard-hint"
// };

// const LastName = () => {
//   return <small>wasted</small>;;
// }

// export default LastName;

import React, { useState } from 'react';
import Field from '.';

interface IProps {
  value: string
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}

const LastName = (props: IProps) => {
  const {
    value,
    onChange,
  } = props;

  return (
    <Field
      label="Last Name"
      type="text"
      name="lastName"
      inputVariant="Form-input"
      labelVariantBefore="Form-row-label label-before"
      labelVariantAfter="Form-row-label label-after"
      wrapperVariant="Form-row"
      hintText="e.g: Doe"
      hintVariant="Form-row-hint standard-hint"
      value={value}
      onChange={onChange}
    />
  );
}

export default LastName;
