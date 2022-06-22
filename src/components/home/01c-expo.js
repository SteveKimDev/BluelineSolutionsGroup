import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';
import ExpoImg from './01d-expo-img';

import * as Home from './home.module.css';

const Expo = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '50px',
    delay: 500,
    config: { duration: 1000 },
  });

  const fadeInUp2 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '50px',
    delay: 1000,
    config: { duration: 1000 },
  });

  const fadeInUp3 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '50px',
    delay: 1500,
    config: { duration: 1000 },
  });
  return (
    <>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <div className={Home.expoSection}>
        <animated.p style={fadeInUp1} className={Home.introDescription}>
          We are proud to announce
        </animated.p>
        <animated.p style={fadeInUp2} className={Home.introDescription}>
          we will be serving...
        </animated.p>
        <animated.div style={fadeInUp3}>
          <ExpoImg />
        </animated.div>
      </div>
    </>
  );
};

export default Expo;
