import * as React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import BackgroundVideo from './02-background-video';
import Intro from './03-intro';
import Expo from './04-expo';

const HomePage = () => {
  return (
    <Parallax pages={5}>
      {/* page 1 */}
      <ParallaxLayer
        sticky={{ start: 0, end: 1 }}
        style={{
          zIndex: -100,
        }}
      >
        <BackgroundVideo />
      </ParallaxLayer>

      {/* page 2 */}
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{
          zIndex: 100,
        }}
      >
        <Intro />
      </ParallaxLayer>

      {/* page 3 */}
      <ParallaxLayer offset={1} speed={0.5}>
        <Expo />
      </ParallaxLayer>

      {/* page 4 */}
      <ParallaxLayer
        offset={2}
        speed={0.5}
        style={{
          zIndex: 100,
        }}
      >
        <p>Layer 3</p>
      </ParallaxLayer>

      {/* page 5 */}
      <ParallaxLayer
        offset={3}
        speed={0.5}
        style={{
          color: 'red',
          fontSize: '200px',
          zIndex: 100,
        }}
      >
        <p>Layer 4</p>
      </ParallaxLayer>
    </Parallax>
  );
};
export default HomePage;
