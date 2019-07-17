import * as React from 'react';

interface ToggleProps {
  children: any
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  variant?: string
}

export const Toggle = (props: ToggleProps) => {
  return (
    <button
      onClick={props.onClick}
      className={props.variant}
    >
      {props.children}
    </button>
  );
}
