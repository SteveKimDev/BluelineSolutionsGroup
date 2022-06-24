import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import EngineVideo from './08a-engine-video';
import EngineDescription from './08b-engine-description';

import * as Home from './home.module.css';

const EngineSection = () => {
  return (
    <section className={Home.engineSection}>
      <EngineVideo />
      <Parallax opacity={[1, 0]} easing='easeInBack'>
        <EngineDescription />
      </Parallax>
    </section>
  );
};

export default EngineSection;
