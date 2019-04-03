import React from 'react';

interface IProps {
  submitVariant?: string
  submitValue: string
}

export default function Submit (props: IProps) {
  return (
    <input
      type="submit"
      className={props.submitVariant}
    >
      {props.submitValue}
    </input>
  );
}
