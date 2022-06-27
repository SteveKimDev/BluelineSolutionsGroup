import * as React from 'react';

import * as Home from './home.module.css';
class EngineVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://res.cloudinary.com/drqcptpet/video/upload/q_auto/v1656091987/Blueline%20Solutions%20Group/engine_tepw84.mp4',
    };
  }

  render() {
    return (
      <div className={Home.videoOverlay}>
        <video className={Home.engineVideo} autoPlay loop muted playsInline>
          <source src={this.state.url} type='video/mp4' />
        </video>
      </div>
    );
  }
}

export default EngineVideo;
