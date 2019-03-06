import React, { Component } from 'react';
import './UrlShortener.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Login from './Pages/Login.jsx';

class UrlShortener extends Component {


  render() {
    return (
      <div className="UrlShortener">
        <Login />
      </div>
    );
  }
}

export default UrlShortener;
