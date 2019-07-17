import React, { useState } from 'react';
import Field from '.';

interface IProps {
  value: string
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}

const FirstName = (props: IProps) => {
  const {
    value,
    onChange,
  } = props;

  return (
    <Field
      label="First Name"
      type="text"
      name="firstName"
      inputVariant="Form-input"
      labelVariantBefore="Form-row-label label-before"
      labelVariantAfter="Form-row-label label-after"
      wrapperVariant="Form-row"
      hintText="e.g: John"
      hintVariant="Form-row-hint standard-hint"
      value={value}
      onChange={onChange}
    />
  );
}

export default FirstName;
