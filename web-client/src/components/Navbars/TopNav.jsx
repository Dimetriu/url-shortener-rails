import React, { Component, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import './TopNav.css';
import * as Links from '../Links/index';

function Home () {
  return <h2>Home</h2>;
}

export default class TopNav extends Component {
  constructor() {
    super();

    this.state = { yup: true };
  }

  render() {

    return (
      <header>
        <nav className="TopNav">
          <Links.Logo />
          <div className="row-clearfix" />
          <Links.SignIn />
          <Links.SignUp />

          <div className="Nav-link-block">
            <Links.SignIn />
            <Links.SignUp />
          </div>
        </nav>
      </header>
    );
  }
}

