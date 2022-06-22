import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import BackgroundVideo from './01a-background-video';
import Intro from './01b-intro';
import Expo from './01c-expo';

import * as Home from './home.module.css';

const HomePage = () => {
  return (
    <section className={Home.introSection}>
      <BackgroundVideo />

      <Parallax opacity={[1, 0]} easing='easeInBack'>
        <Intro />
      </Parallax>

      <Parallax opacity={[1, 0]} easing='easeInBack'>
        <Expo />
      </Parallax>
    </section>
  );
};
export default HomePage;
