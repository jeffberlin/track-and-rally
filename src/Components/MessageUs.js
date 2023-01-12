import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function MessageUs() {
  return (
    <div className="message-us section">
      <Container fluid="md">
        <Row className="justify-content-center">
          <Col xl={6} lg={6} md={6} sm={12}>
            <h2 className="title roboto">Send us a message</h2>
            <p className="nunito">
              If you have an event that you would like us to share, results from an event, a racer spotlight, or any other inquiries, please send an email to <a href="mailto:thetrackandrally@gmail.com" alt="Email">thetrackandrally@gmail.com</a>.
            </p>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} className="text-center message-us-polaroids">
            <div className="polaroid">
              <Image
                className="message-us-img"
                src="./images/track-and-rally-dave-gregory-track-min.jpg"
                alt="Dave Gregory Miata"
              />
              <div className="img-text">
                <p className="nunito">
                  Co-Founder Dave Gregory's track Miata
                </p>
              </div>
            </div>
            <div className="polaroid">
              <Image
                className="message-us-img"
                src="./images/track-and-rally-jeff-berlin-rally-car-jump-min.jpg"
                alt="Dave Gregory Miata"
              />
              <div className="img-text">
                <p className="nunito">
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

export default MessageUs;
