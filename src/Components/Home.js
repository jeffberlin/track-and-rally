import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Title from './Title';
import About from './About';

const Contact = React.lazy(() => import('./Contact'));

function Home() {
  return (
    <>
    <Container fluid className="main">
      <Row className="tag justify-content-center">
        <Title />
      </Row>
    </Container>
    <About />
    <Contact />
    </>
  )
}

export default Home;
