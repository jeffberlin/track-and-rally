import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/home.css';
import './css/nav.css';
import './css/footer.css';
import './css/about.css';
import './css/message-us.css';
import './css/contact.css';

const Navigation = lazy(() => import('./Components/Navigation'));
const Home = lazy(() => import('./Components/Home'));
const Error = lazy(() => import('./Components/Error'));
const Footer = lazy(() => import('./Components/Footer'));
const Contact = lazy(() => import('./Components/Contact'));

function App() {
  return (
    <div className="wrapper">
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App;
