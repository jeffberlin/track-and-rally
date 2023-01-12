import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <div className="about section">
      <Container>
        <Row className="justify-content-center">
          <Col xl={{ span: 6, order: 2 }} lg={{ span: 6, order: 2 }} md={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }}>
            <h2 className="title roboto">What is Track and Rally?</h2>
            <p className="nunito">
              Track and Rally is a platform to help promote racing events and, more importantly, racers. We connect racers to more events - Autocross, Rallycross, Track Days, and Stage Rally's.
            </p>
            <p>Publicity is such an important aspect of furthering your sponsorship leverage and pushing your racing career even further.</p>
            {/* <p>
              Seat time is such an important part of progressing your racing career, which is why we are determined to help you find events that you never knew existed!
            </p> */}
          </Col>
          <Col xl={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} md={{ span: 12, order: 1 }} sm={{ span: 12, order: 2 }}>
            <Image
              src="./images/track-and-rally-stpr-min.jpg"
              alt="Track and Rally at STPR 2019"
              fluid
              thumbnail
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;
