import React, { Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Title from './Title';
// import About from './About';
// import Contact from './Contact';

const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));

function Home() {
  return (
    <>
    <Container fluid className="main">
      <Row className="tag justify-content-center">
        <Title />
      </Row>
    </Container>
    <Suspense fallback={<div>Loading...</div>}>
      <About />
      <Contact  />
    </Suspense>
    </>
  )
}

export default Home;
