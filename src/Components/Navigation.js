import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Navigation() {
  return (
    <Navbar style={{position: 'absolute'}}>
      <Container>
        <Navbar.Brand href="/">
          <img src="./images/track-and-rally-logo-min.png" alt="Track and Rally logo" height={40} />
          <span className="niveau" style={{ color: '#4D4D4D', fontSize: '1.3rem'}}>Track & Rally</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Navigation;
