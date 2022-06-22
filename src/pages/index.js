import * as React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/layout/seo';
import IntroSection from '../components/home/01-intro-section';
import ServiceSection from '../components/home/02-service-section';
import ServiceDescriptionSection from '../components/home/07-service-description-section';

// markup
const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <IntroSection />
    <ServiceSection />
    <ServiceDescriptionSection />
  </Layout>
);

export default IndexPage;
