import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Home from './home.module.css';

const ServiceDescriptionIntro = () => {
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
    <>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <animated.h3 style={fadeInUp1} className={Home.serviceTitle}>
        Blueline Services
      </animated.h3>
      <animated.p style={fadeInUp2} className={Home.serviceDescription}>
        Our unique and exclusive relationships with our manufacutring groups
        allow us to extend to our vendors, industry leading warranty and
        customer service standards that are unmatched. It is this unrelenting
        commitment to ensuring all of our customers receive product quality and
        support, that truly sets us apart.
      </animated.p>
    </>
  );
};

export default ServiceDescriptionIntro;
