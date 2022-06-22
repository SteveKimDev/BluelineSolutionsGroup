import * as React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import BackgroundVideo from './02-background-video';
import Intro from './03-intro';
import Expo from './04-expo';
import ServiceIntro from './05-service-intro';
import PlaneImg from './06-plane-img';
import ServiceDescription from './07-service-description';
import Footer from '../layout/footer';

import * as Home from './home.module.css';

const HomePageMobile = () => {
  return (
    <div className={Home.mobileView}>
      <Parallax pages={5.7}>
        {/* page 0 */}
        <ParallaxLayer
          sticky={{ start: 0, end: 1 }}
          style={{
            zIndex: -100,
          }}
        >
          <BackgroundVideo />
        </ParallaxLayer>

        {/* page 1 */}
        <ParallaxLayer offset={0} speed={0.2}>
          <Intro />
        </ParallaxLayer>

        {/* page 2 */}
        <ParallaxLayer offset={1} speed={0.2}>
          <Expo />
        </ParallaxLayer>

        {/* page 3 */}
        <ParallaxLayer offset={2} speed={0.2}>
          <PlaneImg />
        </ParallaxLayer>

        {/* page 3 */}
        <ParallaxLayer offset={2}>
          <ServiceIntro />
        </ParallaxLayer>

        {/* page 4 */}
        <ParallaxLayer offset={3} speed={0.1}>
          <ServiceDescription />
        </ParallaxLayer>

        {/* page 5 */}
        <ParallaxLayer offset={5.3} speed={0}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
export default HomePageMobile;
