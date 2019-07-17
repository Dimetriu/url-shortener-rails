import React, { useState } from 'react';
import Field from '.';

interface IProps {
  value: string
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}

const Email = (props: IProps) => {
  const {
    value,
    onChange,
  } = props;

  return (
    <Field
      label="Email"
      type="email"
      name="email"
      inputVariant="Form-input"
      labelVariantBefore="Form-row-label label-before"
      labelVariantAfter="Form-row-label label-after"
      wrapperVariant="Form-row"
      hintText="e.g: example@mail.com"
      hintVariant="Form-row-hint standard-hint"
      value={value}
      onChange={onChange}
    />
  );
}

export default Email;
