import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectSVG from '../../svg/project.svg';
import ConstructionSVG from '../../svg/construction.svg';
import GreenEnergySVG from '../../svg/green-energy.svg';
import CargoSVG from '../../svg/cargo.svg';
import AviationSVG from '../../svg/plane.svg';
import BankingSVG from '../../svg/banking.svg';
import EngineSVG from '../../svg/engine.svg';

import * as Home from './home.module.css';

const ServiceDescription = () => {
  return (
    <section className={Home.serviceDescriptionSection}>
      <Row>
        {/* title */}
        <Col xs={12}>
          <h3 className={Home.serviceTitle}>Blueline Services</h3>
        </Col>
        {/* description */}
        <Col xs={12}>
          <p className={Home.serviceDescription}>
            Our unique and exclusive relationships with our manufacutring groups
            allow us to extend to our vendors, industry leading warranty and
            customer service standards that are unmatched. It is this
            unrelenting commitment to ensuring all of our customers receive
            product quality and support, that truly sets us apart.
          </p>
        </Col>

        {/* services row 1 */}
        <Row className={Home.serviceDescriptionRow1}>
          <Col sm={3}>
            <ProjectSVG className={Home.serviceSvg} />
            <p className={Home.serviceDescription}>
              Project &amp; Financing
              <br />
              Consulting
            </p>
          </Col>
          <Col sm={3}>
            <ConstructionSVG className={Home.serviceSvg} />
            <p className={Home.serviceDescription}>
              Infrastructure
              <br />
              Construction
            </p>
          </Col>
          <Col sm={3}>
            <GreenEnergySVG className={Home.serviceSvg} />
            <p className={Home.serviceDescription}>
              Green Energy
              <br />
              Technology
            </p>
          </Col>
          <Col sm={3}>
            <CargoSVG className={Home.serviceSvg} />
            <p className={Home.serviceDescription}>
              Cargo
              <br />
              Logistics
            </p>
          </Col>
        </Row>

        {/* services row 2 */}
        <Row className={Home.serviceDescriptionRow2}>
          <Col sm={4}>
            <AviationSVG className={Home.serviceSvg} />
            <p className={Home.serviceDescription}>
              Aviation
              <br />
              Services
            </p>
          </Col>
          <Col sm={4}>
            <BankingSVG className={Home.serviceSvg} />
            <p className={Home.serviceDescription}>
              Banking
              <br />
              Services
            </p>
          </Col>
          <Col sm={4}>
            <EngineSVG className={Home.serviceSvg} />
            <p className={Home.serviceDescription}>
              Engines (GE Engines)
              <br />
              DOD Needs Engine Parts
            </p>
          </Col>
        </Row>

        {/* description */}
        <Col xs={12}>
          <p
            className={`${Home.serviceDescription} ${Home.serviceDescriptionLast}`}
          >
            Our services include but not limited to cargo planes. sustainable
            technologies, and aviation engines and parts.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default ServiceDescription;
