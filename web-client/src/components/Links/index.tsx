import React from 'react';
import './styles.css';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
  to: string
  text: any
  title?: string
  variant?: string
}

export const Logo = () => {
  const chevronLeft = <FontAwesomeIcon icon="chevron-left" size="xs" />;
  const chevronRight = <FontAwesomeIcon icon="chevron-right" size="xs" />;

  return (
    <NavLink
      to="/"
      className="Logo"
      title="Home"
    >
      {chevronRight}
      &nbsp;Shortencrafts.io&nbsp;
      {chevronLeft}
    </NavLink>
  );
}

export const GeneralLink = (props: IProps) => {
  return (
    <Link
      to={props.to}
      className={"General-link " + props.variant}
    >
      {props.text}
    </Link>
  );
}

export const NavigationLink = (props: IProps) => {
  return (
    <NavLink
      to={props.to}
      className="Nav-link"
      title={props.title}
    >
      {props.text}
    </NavLink>
  );
}
