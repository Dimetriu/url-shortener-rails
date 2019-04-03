import React from 'react';
import './Forms.css';

interface FormProps {
  children: any
  htmlAction?: string
  variant?: string
}

export default function FormGroup (props: FormProps) {
  return (
    <form action={props.htmlAction}>
      {props.children}
    </form>
  );
}
