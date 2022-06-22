import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import ServiceIntro from './02a-service-intro';
import PlaneImg from './02b-plane-img';

import * as Home from './home.module.css';

const ServiceSection = () => {
  return (
    <section className={Home.serviceSection}>
      <Parallax opacity={[1, 0]} easing='easeInBack'>
        <ServiceIntro />
      </Parallax>

      <Parallax speed={10}>
        <PlaneImg />
      </Parallax>
    </section>
  );
};

export default ServiceSection;
