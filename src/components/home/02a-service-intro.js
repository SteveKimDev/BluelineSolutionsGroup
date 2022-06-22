import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Home from './home.module.css';

const ServiceIntro = () => {
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
  return (
    <>
      <Waypoint
        bottomOffset='50%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <div className={Home.serviceIntroSection}>
        <animated.h1 style={fadeInUp1} className={Home.introTitle1}>
          Logistics
        </animated.h1>
        <animated.h1 style={fadeInUp2} className={Home.introTitle2}>
          Services
        </animated.h1>
        <animated.p style={fadeInUp3} className={Home.introDescription}>
          Blueline Solutions Group has established a reputation as a prominent
          and respected provider for domestic and international logistics
          services.
        </animated.p>
      </div>
    </>
  );
};

export default ServiceIntro;
