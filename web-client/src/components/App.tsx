import * as React from 'react';
import AppRoutes from '../routes';
import './App.css';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import './lib/fa-library';

import { TextRow } from 'react-placeholder/lib/placeholders';
import 'react-placeholder/lib/reactPlaceholder.css';

function Home() {
  return <h2>Home</h2>;
}

export default class App extends React.Component {
  render() {
    const topNavPlaceholder = <TextRow color='#E0E0E0' />;

    return (
      <main className="App">
        <Router>
          <React.Suspense fallback={topNavPlaceholder}>

            <div className="App-body">
              <TopNav />

              <Switch>
                <AppRoutes />
              </Switch>
            </div>

            <Footer />

          </React.Suspense>
        </Router>
      </main>
    );
  }
}

const TopNav = React.lazy(() => import('./Navs/TopNav'));
const Footer = React.lazy(() => import('./Footer'));
