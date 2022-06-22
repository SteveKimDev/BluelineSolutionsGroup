import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import EngineSVG from '../../svg/engine.svg';

import * as Home from './home.module.css';

const Service7 = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '20px',
    delay: 600,
    config: { duration: 1000 },
  });
  return (
    <animated.div style={fadeInUp}>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <EngineSVG className={Home.serviceSvg} />
      <p className={Home.serviceDescription}>
        Engines (GE Engines)
        <br />
        DOD Needs Engine Parts
      </p>
    </animated.div>
  );
};

export default Service7;
