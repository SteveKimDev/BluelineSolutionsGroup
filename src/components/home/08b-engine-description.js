import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Home from './home.module.css';

const EngineDescription = () => {
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
  return (
    <div>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <animated.h3 style={fadeInUp1} className={Home.engineTitle}>
        Engine Logistics
      </animated.h3>
      <animated.p style={fadeInUp2} className={Home.engineDescription}>
        Along with our other logistic services, we also provide engine logistics
        for the US Department of Defense. Providing the DOD with engines (GE
        engines) and engine parts.
      </animated.p>
    </div>
  );
};

export default EngineDescription;
