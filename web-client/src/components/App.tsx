import * as React from 'react';
import { Footer } from './Footer';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      <Router>
        <main className="App">
          <React.Suspense fallback={topNavPlaceholder}>
            <TopNav />

            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </React.Suspense>

          <Footer />
        </main>
      </Router>
    );
  }
}

const TopNav = React.lazy(() => import('./Navs/TopNav'));
const Login = React.lazy(() => import('./Pages/Login'));
const Signup = React.lazy(() => import('./Pages/SignUp'));
