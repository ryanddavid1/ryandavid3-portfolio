import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Security Analyst" icon="ri-apps-line" />

                <ServicesItem title="System Administrator" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Data Base Administrator"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Ethical Hacking,</h3>
            <h3 className="mb-4">Python Scripts</h3>
            <p></p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
