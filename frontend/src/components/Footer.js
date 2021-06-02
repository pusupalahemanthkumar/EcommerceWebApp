// Importing required files and packages here.
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Defining Component here.
const Footer = () => {
  return (
    <footer style={{backgroundColor:"#170229"}}>
      <Container>
        <Row>
          <Col className="text-center py-3">Handcrafted by AWD (Average Web Developer) © 2021</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
