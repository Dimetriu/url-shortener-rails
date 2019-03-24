import React, { useState } from 'react';
import { Toggle as ToggleBtn } from '../Buttons/Toggle';
import { ellipsisV, times } from '../fa-library';

interface IProps {
  children?: any
  content: any
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

        {/* <button onClick={toggleCollapse}>
          {Collapse ? 'X' : 'O'}
        </button> */}
        <ToggleBtn
          onClick={toggleCollapse}
          variant="ToggleMenu"
        >
          {Collapse ? <Close /> : <Open />}
        </ToggleBtn>
      </div>

      {Collapse && props.content}
    </>
  );
}

const Open = ellipsisV;
const Close = times;
