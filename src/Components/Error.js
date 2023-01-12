import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/error.css';

function Error() {
  useEffect(() => {
    document.title = "Track & Rally - Error"
  })
  return (
    <Container className="section error">
      <Row>
        <Col>
          <h2 className="section-header roboto">Uh oh! Something went wrong! Please try again.</h2>
        </Col>
      </Row>
    </Container>
  )
}

export default Error;
