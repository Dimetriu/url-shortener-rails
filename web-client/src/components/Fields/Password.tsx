import React, { useState } from 'react';
import Field from './';

interface IProps {
  value: string
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}

const Password = (props: IProps) => {
  const {
    value,
    onChange,
  } = props;

  return (
    <Field
      label="Password"
      type="password"
      name="password"
      inputVariant="Form-input"
      labelVariantBefore="Form-row-label label-before"
      labelVariantAfter="Form-row-label label-after"
      wrapperVariant="Form-row"
      hintText="Minimum 8 characters"
      hintVariant="Form-row-hint standard-hint"
      value={value}
      onChange={onChange}
    />
  );
}

export default Password;
