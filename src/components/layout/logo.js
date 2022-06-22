import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as HeaderStyle from './global-style/header.module.css';

const Logo = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/drqcptpet/image/upload/q_auto/v1655850943/Blueline%20Solutions%20Group/blueline-solutions-logo-no-text_zeeowh.webp'
        alt='logo img'
        className={`${HeaderStyle.logo}`}
      />
    </div>
  );
};

export default Logo;
