import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Login from './Pages/Login.jsx';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
