import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as FooterStyle from './global-style/footer.module.css';

const Logo = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/drqcptpet/image/upload/q_auto/v1655850344/Blueline%20Solutions%20Group/blueline-solutions-whit-text-logo_osdfvn.webp'
        alt='logo img'
        className={`${FooterStyle.logo}`}
      />
    </div>
  );
};

export default Logo;
