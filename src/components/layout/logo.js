import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import { StaticImage } from 'gatsby-plugin-image';

import * as HeaderStyle from './global-style/header.module.css';

const Logo = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: { duration: 500 },
  });
  return (
    <animated.div style={fadeIn}>
      <StaticImage
        src='https://res.cloudinary.com/drqcptpet/image/upload/q_auto/v1656093030/Blueline%20Solutions%20Group/blueline-solutions-logo_u8t1zi.webp'
        alt='logo img'
        className={`${HeaderStyle.logo}`}
      />
    </animated.div>
  );
};

export default Logo;
