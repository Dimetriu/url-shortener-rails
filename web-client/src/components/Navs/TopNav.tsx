import * as React from 'react';
import { Logo, NavigationLink } from '../Links';
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
            <Logo />
            <div className="row-clearfix" />
            <LinkToLogIn />
            <LinkToSignUp />
          </Collapsible>
        </nav>
      </header>
    );
  }
}

function NavLinkBlock () {
  return (
    <div className="Nav-link-block">
      <LinkToLogIn />
      <LinkToSignUp />
    </div>
  );
}

const LinkToLogIn = () => {
  return (
    <NavigationLink
      to="/login"
      title="Log in"
      text="Log in"
    />
  );
}

const LinkToSignUp = () => {
  return (
    <NavigationLink
      to="/signup"
      title="Sign up"
      text="Sign up"
    />
  );
}
