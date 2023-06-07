import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
} from "../../content_option";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About our Org</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About Us</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h3 className="subheader">Publications</h3>
            <p className="description">Check out some external links about our org</p>
            <div className="intro_btn-action">
              <a href="https://www.dailycal.org/2022/03/18/skateboarding-as-a-sport-why-classification-is-a-grind" target="_blank" rel="noopener noreferrer">
                <div id="button_h" className="ac_btn btn">
                  Daily Cal (03/22)
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </a>
              <a href="https://stanforddaily.com/2022/04/19/defiance-on-wheels-fashionx-and-stanford-skate-club-show-skater-fashion-at-its-finest/" target="_blank" rel="noopener noreferrer">
                <div id="button_p" className="ac_btn btn">
                  Stanford Daily (04/22)
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </a>
              <a href="https://dailycal.org/2022/11/17/stoked-berkeley-skate-community-reacts-to-proposed-new-skate-spot" target="_blank" rel="noopener noreferrer">
                <div id="button_h" className="ac_btn btn">
                  Daily Cal(11/22)
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </a>
            </div>
          </Col>
        </Row>
        <h4 className="display-10 mb-4">For any questions, email us at berkeleyskateclub@gmail.com</h4>
      </Container>
      <br></br>
    </HelmetProvider>
  );
};
