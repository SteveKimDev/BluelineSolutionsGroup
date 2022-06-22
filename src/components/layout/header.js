import * as React from 'react';

import Logo from './logo';

import * as HeaderStyle from './global-style/header.module.css';

const Header = () => {
  return (
    <div className={HeaderStyle.headerDiv}>
      <Logo />
      <span className={HeaderStyle.linkDiv}>
        <a href='mailto:info@bluelinesolutionsgroup.com'>Contact Us</a>
      </span>
    </div>
  );
};

export default Header;
