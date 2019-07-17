import React, { useState } from 'react';
import { Toggle as ToggleBtn } from '../Buttons/Toggle';

interface IProps {
  children?: any
  content: any
  toggleIcon: JSX.Element
  toggleIconAfter?: JSX.Element
  variant?: string
}

export default function Collapsible (props: IProps) {
  const [Collapse, setCollapse] = useState(false);

  function toggleCollapse () {
    setCollapse(Collapse ? false : true);
  }

  return (
    <>
      <div className={props.variant}>
        {props.children}

        <ToggleBtn
          onClick={toggleCollapse}
          variant="ToggleMenu"
        >
          {Collapse ? props.toggleIconAfter : props.toggleIcon}
        </ToggleBtn>
      </div>

      {Collapse && props.content}
    </>
  );
}
