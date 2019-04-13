import React from 'react';
import Field from './';

const Submit = (props: { htmlValue: string }) => {
  return (
    <Field
      htmlValue={props.htmlValue}
      ofType="submit"
      inputVariant="Primary-btn Form-action"
      wrapperVariant="Form-row"
    />
  );
}

export default Submit;
