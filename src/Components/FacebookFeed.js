import React, { Component } from 'react';
import { FacebookProvider, Page } from 'react-facebook';

class FacebookFeed extends Component {

  // componentDidMount() {
  //   window.FB.XFBML.parse();
  // }

  render() {
    return (
      <FacebookProvider appId="273579354016136">
        <Page href="https://www.facebook./trackandrally/" tabs="timeline" />
      </FacebookProvider>
      // <div
      //   className="fb-page"
      //   data-href="https://www.facebook.com/trackandrally/"
      //   data-tabs="timeline"
      //   data-width="500"
      //   data-height=""
      //   data-small-header="false"
      //   data-adapt-container-width="true"
      //   data-hide-cover="false"
      //   data-show-facepile="false"
      // >
      //   <blockquote
      //     cite="https://www.facebook.com/trackandrally/"
      //     className="fb-xfbml-parse-ignore"
      //   >
      //     If the feed does not display, please try reloading the page.
      //     <a href="/">Track and Rally</a>
      //   </blockquote>
      // </div>
    )
  }
}

export default FacebookFeed;
