import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import GreenEnergySVG from '../../svg/green-energy.svg';

import * as Home from './home.module.css';

const Service3 = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '20px',
    delay: 200,
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
      <GreenEnergySVG className={Home.serviceSvg} />
      <p className={Home.serviceDescription}>
        Green Energy
        <br />
        Technology
      </p>
    </animated.div>
  );
};

export default Service3;
