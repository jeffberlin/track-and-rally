import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Navigation() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">
          <img src="./images/track-and-rally-logo-min.png" alt="Track and Rally logo" height={40} />
          <span className="niveau niveau-nav">Track & Rally</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Navigation;
