import React, { Component, Suspense } from 'react';
import './UrlShortener.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './fa-library';

import { TextRow } from 'react-placeholder/lib/placeholders';
import 'react-placeholder/lib/reactPlaceholder.css';

const TopNav = React.lazy(() => import('./Navbars/TopNav'));

class UrlShortener extends Component {
  render() {

    const topNavPlaceholder = <TextRow color='#E0E0E0' />;

    return (
      <div className="App">
        <Router>
          <header>
            <Suspense fallback={topNavPlaceholder}>
              <TopNav />
            </Suspense>
          </header>
        </Router>
      </div>
    );
  }
}

export default UrlShortener;
