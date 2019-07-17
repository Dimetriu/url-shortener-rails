import React from 'react';
import './styles.css';

interface IProps {
  children: any
  variant?: string
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const Form = (props: IProps) => {
  return (
    <form
      className={props.variant}
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  );
}

export default Form;
