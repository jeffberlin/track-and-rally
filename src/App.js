import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Error from './Components/Error';
// import Footer from './Components/Footer';

import './css/app.css';
import './css/home.css';
import './css/nav.css';
import './css/footer.css';
import './css/responsive.css';
import './css/about.css';
import './css/contact.css';

// const Home = React.lazy(() => import('./Components/Home'));
// const Error = React.lazy(() => import('./Components/Error'));
const Footer = React.lazy(() => import('./Components/Footer'));

function App() {
  return (
    <main className="wrapper">
      <header className="header">
        <Navigation />
      </header>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={Error} />
        </Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
    </main>
  )
}

export default App;
