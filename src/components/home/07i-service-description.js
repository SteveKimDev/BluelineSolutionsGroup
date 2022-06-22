import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Home from './home.module.css';

const ServiceDescription = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '50px',
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
      <animated.p
        style={fadeInUp1}
        className={`${Home.serviceDescription} ${Home.serviceDescriptionLast}`}
      >
        Our services include but not limited to cargo planes. sustainable
        technologies, and aviation engines and parts.
      </animated.p>
    </>
  );
};

export default ServiceDescription;
