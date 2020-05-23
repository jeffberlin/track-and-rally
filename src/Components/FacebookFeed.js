import React, { Component } from 'react';

class FacebookFeed extends Component {


  render() {
    return (
      <div
        className="fb-page"
        data-href="https://www.facebook.com/trackandrally/"
        data-tabs="timeline"
        data-width="500"
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="false"
      >
        <blockquote
          cite="https://www.facebook.com/trackandrally/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/trackandrally/">Track and Rally</a>
        </blockquote>
      </div>
    )
  }
}

export default FacebookFeed;
