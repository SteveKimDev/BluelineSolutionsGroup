import * as React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/layout/seo';
import HomePage from '../components/home/01-home-page';

// markup
const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <HomePage />
  </Layout>
);

export default IndexPage;
