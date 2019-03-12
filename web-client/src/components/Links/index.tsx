import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Logo () {
  const chevronLeft = <FontAwesomeIcon icon="chevron-left" size="xs" />;
  const chevronRight = <FontAwesomeIcon icon="chevron-right" size="xs" />;

  return (
    <Link
      to="/"
      className="Logo"
      title="Home"
    >
      {chevronRight}
      &nbsp;Shortencrafts.io&nbsp;
      {chevronLeft}
    </Link>
  );
}

export function SignIn () {
  return (
    <Link
      to="/login"
      className="Nav-link"
      title="Log in"
    >
      Log in
    </Link>
  );
}

export function SignUp () {
  return (
    <Link
      to="/signup"
      className="Nav-link"
      title="Sign up"
    >
      Sign up
    </Link>
  );
}
