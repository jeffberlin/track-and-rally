import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Contact() {
  return (
    <div className="contact section">
      <Container fluid="md">
        <Row className="justify-content-center">
          <Col lg={6} md={6} sm={12}>
            <h2 className="title">Send us a message</h2>
            <p>
              If you have an event that you would like us to share, results from an event, a racer spotlight, or any other inquiries, please send an email to <a href="mailto:thetrackandrally@gmail.com" alt="Email">thetrackandrally@gmail.com</a>.
            </p>
          </Col>
          <Col lg={6} md={6} sm={12} className="text-center contact-polaroids">
            <div className="polaroid" style={{ marginBottom: "1.2rem" }}>
              <Image
                className="contact-img"
                src="./images/dave-gregory-track.JPG"
                alt="Dave Gregory Miata"
              />
              <div className="img-text">
                <p>
                  Co-Founder Dave Gregory's track Miata
                </p>
              </div>
            </div>
            <div className="polaroid">
              <Image
                className="contact-img"
                src="./images/jump.jpg"
                alt="Dave Gregory Miata"
              />
              <div className="img-text">
                <p>
                  Co-Founder Jeff Berlin's rally Subaru
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact;
