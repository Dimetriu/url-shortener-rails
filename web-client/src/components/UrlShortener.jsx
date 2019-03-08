import React, { Component } from 'react';
import './UrlShortener.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// import Login from './Pages/Login.jsx';
import TopNav from './Navbars/TopNav.jsx';

class UrlShortener extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <TopNav />
        </header>
      </div>
    );
  }
}

library.add(
  [
    faBars,
    faTimes,
    faChevronRight,
    faChevronLeft,
    faCheck,
  ]
);

export default UrlShortener;
