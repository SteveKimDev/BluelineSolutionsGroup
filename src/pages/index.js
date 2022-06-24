import * as React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/layout/seo';
import IntroSection from '../components/home/01-intro-section';
import ServiceSection from '../components/home/02-service-section';
import EngineSection from '../components/home/08-engine-section';
import ServiceDescriptionSection from '../components/home/07-service-description-section';

// markup
const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <IntroSection />
    <ServiceSection />
    <EngineSection />
    <ServiceDescriptionSection />
  </Layout>
);

export default IndexPage;
