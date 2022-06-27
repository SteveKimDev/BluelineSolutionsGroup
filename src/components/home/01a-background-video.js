import * as React from 'react';

import * as Home from './home.module.css';

class BackgroundVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://res.cloudinary.com/drqcptpet/video/upload/q_auto/v1655568274/Blueline%20Solutions%20Group/earth_tw847n.mp4',
    };
  }

  render() {
    return (
      <>
        <video className={Home.backgroundVideo} autoPlay loop muted playsInline>
          <source src={this.state.url} type='video/mp4' />
        </video>
      </>
    );
  }
}

export default BackgroundVideo;
