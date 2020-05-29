import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FacebookFeed from './FacebookFeed';

function About() {
  return (
    <div className="about section">
      <Container fluid="md">
        <Row className="justify-content-center">
          <Col lg={6} md={{ span: 6, order: 2 }} sm={12}>
            <h2 className="title">What is Track and Rally?</h2>
            <p>
              Track and Rally is a platform to help promote racing events and, more importantly, racers. We connect racers to more Autocross, Rallycross, Track Days, and Stage Rally events.
            </p>
            <p>
              Seat time is such an important part of progressing your racing career, which is why we are determined to help you find events that you never knew existed!
            </p>
          </Col>
          <Col lg={6} md={{ span: 6, order: 1 }} sm={12} id="fb">
            <FacebookFeed />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;
