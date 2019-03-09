import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './TopNav.css';
import NavLinkBlock from './NavLinkBlock.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home () {
  return <h2>Home</h2>;
}

function Login () {
  return <h2>Loginnnnn</h2>;
}

function SignUp () {
  return <h2>Sign up</h2>;
}

export default class TopNav extends Component {
  render() {
    const chevronLeft = <FontAwesomeIcon icon="chevron-left" size="xs" />;
    const chevronRight = <FontAwesomeIcon icon="chevron-right" size="xs" />;

    const loginLink = (
      <Link
        to="/login"
        className="Nav-link"
        title="Log in"
      >
        Log in
      </Link>
    );

    const signUpLink = (
      <Link
        to="/signup"
        className="Nav-link"
        title="Sign up"
      >
        Sign up
      </Link>
    );

    return (
      <Router>
        <>
          <nav className="TopNav">
            <Link
              to="/"
              className="Logo"
              title="Home"
            >
              {chevronRight}
              &nbsp;Shortencrafts.io&nbsp;
              {chevronLeft}
            </Link>

            <div className="row-clearfix" />

            {loginLink}

            {signUpLink}

            <NavLinkBlock
              loginLink={loginLink}
              signUpLink={signUpLink}
            />
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
        </>
      </Router>
    );
  }
}
