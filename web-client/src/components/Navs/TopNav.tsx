import * as React from 'react';
import * as NavLink from '../Links/nav';
import Collapsible from '../lib/Collapsible';
import './TopNav.css';

export default class TopNav extends React.PureComponent {
  render() {
    return (
      <header>
        <nav>
          <Collapsible
            content={<NavLinkBlock />}
            variant="TopNav"
          >
            <NavLink.Logo />
            <div className="row-clearfix"></div>
            <NavLink.SignIn />
            <NavLink.SignUp />
          </Collapsible>
        </nav>
      </header>
    );
  }
}

function NavLinkBlock () {
  return (
    <div className="Nav-link-block">
      <NavLink.SignIn />
      <NavLink.SignUp />
    </div>
  );
}
