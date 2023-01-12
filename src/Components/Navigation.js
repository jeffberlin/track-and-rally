import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
  return (
    <header className="header">
      <Navbar>
        <Container>
          <Navbar.Brand href="/">
            <Image src="./images/tr-logo-new-green-outline-300-min.png" alt="Track and Rally logo" height={40} />
          </Navbar.Brand>
          <LinkContainer to="/">
            <Nav.Link className="roboto">Home</Nav.Link>
          </LinkContainer>
          {/* <Nav.Link
            href="https://shop.trackandrally.com"
            active={false}
            rel="noopener"
            className="roboto"
          >
            Store
          </Nav.Link> */}
          <LinkContainer to="/contact">
            <Nav.Link className="roboto">
              Contact
            </Nav.Link>
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  )
}

export default Navigation;
