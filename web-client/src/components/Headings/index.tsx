import React from 'react';
import './styles.css';

const FormHeading = (props: {text: string}) => {
  return (
    <h3 className="Form-heading">
      {props.text}
    </h3>
  );
}

export default FormHeading;
