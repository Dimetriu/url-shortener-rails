import React from 'react';

export default function NavLinkBlock (props) {
  const {
    loginLink,
    signUpLink,
    isToggleOn
  } = props;

  if (isToggleOn) {
    return (
      <div className="Nav-link-block">
        {loginLink}
        {signUpLink}
      </div>
    );
  }; return null;
}
