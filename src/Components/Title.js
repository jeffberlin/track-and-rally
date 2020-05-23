import React from 'react';
import Col from 'react-bootstrap/Col';

function Title() {
  return (
    <Col lg={8} md={8} sm={12} className="text-center">
      <h1 className="animated fadeInDown slow delay-1s roboto">Connecting racers to more events</h1>
      <p className="animated fadeIn slow delay-2s">Racer portal coming soon.</p>
      <div className="social-icons">
        <a href="https://www.facebook.com/trackandrally/" target="_blank" rel="noopener noreferrer">
          <i className="font-awesome fab fa-facebook animated fadeInUp slow delay-1s" style={{marginRight: ".7rem"}}></i>
        </a>
        <a href="https://www.instagram.com/trackandrally/" target="_blank" rel="noopener noreferrer">
          <i className="font-awesome fab fa-instagram animated fadeInUp slow delay-1s" style={{marginRight: ".7rem"}}></i>
        </a>
        <a href="https://www.twitter.com/trackandrally/" target="_blank" rel="noopener noreferrer">
          <i className="font-awesome fab fa-twitter animated fadeInUp slow delay-1s"></i>
        </a>
      </div>
      <a
        className="events-button roboto animated fadeInUp slow delay-2s"
        href="https://www.motorsportreg.com/calendar/?country=US&radius=9999&lat=37.09&lng=-95.71&loc=United+States"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore Events
      </a>
    </Col>
  )
}

export default Title;
