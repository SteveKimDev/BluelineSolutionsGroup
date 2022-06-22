import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import AviationSVG from '../../svg/plane.svg';

import * as Home from './home.module.css';

const Service5 = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '20px',
    delay: 400,
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
      <AviationSVG className={Home.serviceSvg} />
      <p className={Home.serviceDescription}>
        Aviation
        <br />
        Services
      </p>
    </animated.div>
  );
};

export default Service5;
