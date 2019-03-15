import React, { Component, lazy, Suspense } from 'react';
import './UrlShortener.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './fa-library';

import { TextRow } from 'react-placeholder/lib/placeholders';
import 'react-placeholder/lib/reactPlaceholder.css';

const TopNav = React.lazy(() => import('./Navbars/TopNav.jsx'));

function Home() {
  return <h2>Home</h2>;
}

class UrlShortener extends Component {
  render() {

    const topNavPlaceholder = <TextRow color='#E0E0E0' />;

    return (
      <Router>
        <div className="App">
          <Suspense fallback={topNavPlaceholder}>
            <TopNav />

            <Route path="/" exact component={Home} />
            <Route path="/login" component={login} />
            <Route path="/signup" component={signup} />
          </Suspense>
        </div>
      </Router>
    );
  }
}

const login = lazy(() => import('./Pages/Login'));
const signup = lazy(() => import('./Pages/SignUp'));

export default UrlShortener;
