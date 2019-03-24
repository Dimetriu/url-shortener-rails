import React from 'react';
import * as NavLink from '../Links/nav';

export default function TopNavLinks () {
  return (
    <>
      <NavLink.Logo />
      <div className="row-clearfix" />
      <NavLink.SignIn />
      <NavLink.SignUp />
    </>
  );
}
