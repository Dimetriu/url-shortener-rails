import React from 'react';
import './styles.css';

interface IProps {
  hintText?: string
  hintVariant?: string
  htmlValue?: string
  inputVariant?: string
  label?: string
  labelVariantBefore?: string
  labelVariantAfter?: string
  name: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  value?: string
  wrapperVariant?: string
}

const Field = (props: IProps) => {

  const input = (
    <input
      type={props.type}
      className={props.inputVariant}
      onChange={props.onChange}
      value={
        props.type === "submit" ?
          props.htmlValue :
          props.value
      }
    />
  );

  const label = (
    <label
      className={
        props.value ?
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

export default Field;
