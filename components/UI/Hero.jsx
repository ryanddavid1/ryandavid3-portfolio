import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.jpg";
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
              <p>
              Motivated Junior Security Analyst and System Administration graduate. 
              I completed a Network Administration and Information Security associate 
              degree in Laguardia Community college. Finish 2 Certificate's with Google 
              and IBM in System Administration. In Kali Linux or RedHat Linux able to 
              write scripts in bash and python to automate tasks, or to write scripts 
              to scan a webserver to check for vulnerability's. Able to conduct penetration 
              testing using Burp suite, metasploit, Hydra and immunity debugger. Able to scan 
              the network using Nmap, Nessus, Nikto. In Python able to automate common system 
              administration tasks, troubleshoot and debug complex problems, and apply 
              automation at scale by using configuration management and the Cloud. Bringing 
              an in-depth understanding of how to configure devices, networks and operating 
              systems. History of maintaining equipment, updating software and handling network 
              security with an organized and systematic focus. Strong multitasker with 
              excellent communication and planning abilities. Adaptable and driven with strong 
              work ethic and ability to thrive in team-based. Multilingual and fluent in 
              Spanish and English, offering solid comprehension of cultural diversity.
              </p>
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
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">4 Years</h5>
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
