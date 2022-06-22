import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Home from './home.module.css';

const PlaneImg = () => {
  return (
    <>
      <StaticImage
        src='https://res.cloudinary.com/drqcptpet/image/upload/q_auto/v1655835860/Blueline%20Solutions%20Group/plane_mm0kcy.webp'
        alt='plane img'
        className={Home.planeImg}
      />
    </>
  );
};

export default PlaneImg;
