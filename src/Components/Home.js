import React, { Suspense } from 'react';
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
    <Suspense fallback={<div>Loading...</div>}>
      <Contact />
    </Suspense>
    </>
  )
}

export default Home;
