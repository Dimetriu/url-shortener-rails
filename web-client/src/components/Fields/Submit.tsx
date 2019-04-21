import React from 'react';
import Field from './';

const Submit = (props: {htmlValue: string}) => {
  return (
    <Field
      name="submit"
      type="submit"
      inputVariant="Form-submit Primary-btn"
      wrapperVariant="Form-row"
      htmlValue={props.htmlValue}
    />
  );
}

export default Submit;
