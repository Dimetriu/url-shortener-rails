import React from 'react';
import './styles.css';

interface FormProps {
  children: any
  htmlAction?: string
  variant?: string
}

export default function FormGroup (props: FormProps) {
  return (
    <form action={props.htmlAction} className="Form-vertical">
      {props.children}
    </form>
  );
}
