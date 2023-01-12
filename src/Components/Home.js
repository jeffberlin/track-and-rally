import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Header = React.lazy(() => import('./Header'));
const About = React.lazy(() => import('./About'));
const Message = React.lazy(() => import('./MessageUs'));

function Home() {
  useEffect(() => {
    document.title = "Track & Rally - Home"
  })
  return (
    <>
      <Container fluid className="main">
        <Row className="tag justify-content-center">
          <Header />
        </Row>
      </Container>
      <About />
      <Message />
    </>
  )
}

export default Home;
