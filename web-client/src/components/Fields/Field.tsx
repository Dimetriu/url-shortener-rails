import React, { useState } from 'react';

interface IProps {
  hint?: string
  inputVariant?: string
  label?: string
  labelVariant?: string
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
      className={props.labelVariant}
    >
      {props.label}
    </label>
  );

  return (
    <div className={props.wrapperVariant}>
      {input}
      {label}
      <small>{props.hint}</small>
    </div>
  );
}
