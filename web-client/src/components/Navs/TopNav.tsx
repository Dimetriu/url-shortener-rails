import * as React from 'react';
import * as NavLink from '../Links/nav';
import Collapsible from '../lib/Collapsible';
import {
  ellipsisV as OpenIcon,
  times as CloseIcon
} from '../lib/fa-library';
import './TopNav.css';

export default class TopNav extends React.PureComponent {
  render() {
    return (
      <header className="App-header">
        <nav>
          <Collapsible
            content={<NavLinkBlock />}
            toggleIcon={<OpenIcon />}
            toggleIconAfter={<CloseIcon />}
            variant="TopNav"
          >
            <NavLink.Logo />
            <div className="row-clearfix" />
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
