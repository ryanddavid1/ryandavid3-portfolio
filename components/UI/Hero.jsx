import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero3.jpg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Ryan David</h2>
              <h5 className="mb-4">Security Analyst / System Administrator / Web developer</h5>
              <p>Motivated junior Security Analyst and Administration graduate.</p>
              <p>I completed a Network Administration and Information Security associate degree in Laguardia Community college. Finish 2 Certificate's with Google and IBM in System Administration. </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#">Hire me</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="#">Download CV</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.heroImg} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
