import * as React from 'react';
import { CloudinaryContext, Video, Transformation } from 'cloudinary-react';
import * as Home from './home.module.css';

const EngineVideo = () => {
  return (
    <div className={Home.videoOverlay}>
      <CloudinaryContext cloudName='drqcptpet'>
        <Video
          publicId='Blueline%20Solutions%20Group/engine_tepw84'
          autoPlay
          loop
          muted
          playsInline
          className={Home.engineVideo}
        >
          <Transformation quality='auto' />
        </Video>
      </CloudinaryContext>
    </div>
  );
};

export default EngineVideo;
