import * as React from 'react';
import { CloudinaryContext, Video, Transformation } from 'cloudinary-react';
import * as Home from './home.module.css';

const BackgroundVideo = () => {
  return (
    <div>
      <CloudinaryContext cloudName='drqcptpet'>
        <Video
          publicId='Blueline%20Solutions%20Group/earth_tw847n'
          autoPlay
          loop
          muted
          playsInline
          className={Home.backgroundVideo}
        >
          <Transformation quality='auto' />
        </Video>
      </CloudinaryContext>
    </div>
  );
};

export default BackgroundVideo;
