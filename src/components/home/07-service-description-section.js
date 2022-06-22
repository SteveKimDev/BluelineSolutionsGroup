import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import ServiceDescriptionIntro from './07a-service-description-intro';
import Service1 from './07b-service-1';
import Service2 from './07c-service-2';
import Service3 from './07d-service-3';
import Service4 from './07e-service-4';
import Service5 from './07f-service-5';
import Service6 from './07g-service-6';
import Service7 from './07h-service-7';
import ServiceDescription from './07i-service-description';

import * as Home from './home.module.css';

const ServiceDescriptionSection = () => {
  return (
    <section className={Home.serviceDescriptionSection}>
      <Row>
        {/* title */}
        <Col xs={12}>
          <ServiceDescriptionIntro />
        </Col>

        {/* services row 1 */}
        <Row className={Home.serviceDescriptionRow1}>
          <Col sm={3}>
            <Service1 />
          </Col>
          <Col sm={3}>
            <Service2 />
          </Col>
          <Col sm={3}>
            <Service3 />
          </Col>
          <Col sm={3}>
            <Service4 />
          </Col>
        </Row>

        {/* services row 2 */}
        <Row className={Home.serviceDescriptionRow2}>
          <Col sm={4}>
            <Service5 />
          </Col>
          <Col sm={4}>
            <Service6 />
          </Col>
          <Col sm={4}>
            <Service7 />
          </Col>
        </Row>

        {/* description */}
        <Col xs={12}>
          <ServiceDescription />
        </Col>
      </Row>
    </section>
  );
};

export default ServiceDescriptionSection;
