import * as React from 'react';
import { useSpring, animated } from 'react-spring';

import Logo from './logo';

import * as HeaderStyle from './global-style/header.module.css';

const Header = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
    config: { duration: 500 },
  });
  return (
    <div className={HeaderStyle.headerDiv}>
      <Logo />
      <animated.span style={fadeIn} className={HeaderStyle.linkDiv}>
        <a href='mailto:info@bluelinesolutionsgroup.com'>Contact Us</a>
      </animated.span>
    </div>
  );
};

export default Header;
