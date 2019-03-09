import React, { Component, Suspense } from 'react';
import './UrlShortener.css';
import './fa-library';

const TopNav = React.lazy(() => import('./Navbars/TopNav'));

class UrlShortener extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Suspense fallback={<h1>Loading...</h1>}>
            <TopNav />
          </Suspense>
        </header>
      </div>
    );
  }
}

export default UrlShortener;
