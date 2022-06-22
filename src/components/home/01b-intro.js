import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Home from './home.module.css';

const Intro = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '50px',
    config: { duration: 1000 },
  });

  const fadeInUp2 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '50px',
    delay: 500,
    config: { duration: 1000 },
  });

  const fadeInUp3 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '50px',
    delay: 1000,
    config: { duration: 1000 },
  });

  const fadeInUp4 = useSpring({
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
      <section className={Home.introTitleSection}>
        <animated.h1 style={fadeInUp1} className={Home.introTitle1}>
          Blueline
        </animated.h1>
        <animated.h1 style={fadeInUp2} className={Home.introTitle2}>
          Solutions
        </animated.h1>
        <animated.h1 style={fadeInUp3} className={Home.introTitle3}>
          Group
        </animated.h1>
        <animated.p style={fadeInUp4} className={Home.introDescription}>
          Serving logistical services to domestic and international markets.
        </animated.p>
      </section>
    </>
  );
};

export default Intro;
