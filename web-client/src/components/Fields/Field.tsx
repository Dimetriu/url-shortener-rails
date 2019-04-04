import React, { useState } from 'react';

interface IProps {
  hintText?: string
  hintVariant?: string
  inputVariant?: string
  label?: string
  labelVariantBefore?: string
  labelVariantAfter?: string
  ofType: string
  htmlValue?: string
  wrapperVariant?: string
}

export default function Field (props: IProps) {
  const [Value, setValue] = useState('');

  function handleChange (e: any) {
    setValue(e.target.value);
  }

  const input = (
    <input
      type={props.ofType}
      className={props.inputVariant}
      onChange={handleChange}
      value={
        props.ofType === "submit" ?
          props.htmlValue :
          Value
      }
    />
  );

  const label = (
    <label
      className={
        Value ?
        props.labelVariantAfter :
        props.labelVariantBefore
      }
    >
      {props.label}
    </label>
  );

  return (
    <div className={props.wrapperVariant}>
      {label}
      {input}
      <small
        className={props.hintVariant}
      >
        <i>{props.hintText}</i>
      </small>
    </div>
  );
}
