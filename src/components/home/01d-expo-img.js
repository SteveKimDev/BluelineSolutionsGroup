import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Home from './home.module.css';

const HomePageImg = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/drqcptpet/image/upload/q_auto/v1655921072/Blueline%20Solutions%20Group/world-expo_fqafyf.webp'
        alt='expo img'
        className={Home.expoImg}
      />
    </div>
  );
};

export default HomePageImg;
