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

const HomePageTablet = () => {
  return (
    <div className={Home.tabletView}>
      <Parallax pages={4.2}>
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
        <ParallaxLayer offset={0} speed={0.1}>
          <Intro />
        </ParallaxLayer>

        {/* page 2 */}
        <ParallaxLayer offset={1} speed={0.1}>
          <Expo />
        </ParallaxLayer>

        {/* page 3 */}
        <ParallaxLayer offset={2} speed={0.15}>
          <PlaneImg />
        </ParallaxLayer>

        {/* page 3 */}
        <ParallaxLayer offset={2}>
          <ServiceIntro />
        </ParallaxLayer>

        {/* page 4 */}
        <ParallaxLayer offset={3} speed={0}>
          <ServiceDescription />
        </ParallaxLayer>

        {/* page 5 */}
        <ParallaxLayer offset={3.8} speed={0}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
export default HomePageTablet;
