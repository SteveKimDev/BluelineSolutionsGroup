import * as React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/layout/seo';
import HomePage from '../components/home/01-home-page';
import HomePageTablet from '../components/home/01b-home-page-tablet';
import HomePageMobile from '../components/home/01a-home-page-mobile';

// markup
const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <HomePage />
    <HomePageTablet />
    <HomePageMobile />
  </Layout>
);

export default IndexPage;
