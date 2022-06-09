import React from 'react';
import { Card, FormControl, Nav, Navbar, Button, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container>
      <Navbar bg="warning" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Profile</Nav.Link>
        </Nav>
        <img class="logo" src="/images/logo.png"/>
    </Navbar>
  <Row className="justify-content-center">
    <Col xs lg="2">
    <iframe class="align-items-center col-12 mt-5 video" src="https://www.youtube.com/embed/ksppH64LQ60" allowfullscreen></iframe>
    </Col>
  </Row>
  <Row className="justify-content-center">
  <img src="/images/image1.png"/>
  </Row>
  <Row className="justify-content-center">
    <Col xs lg="2">
    <iframe class="align-items-center col-6 video-card" src="https://www.youtube.com/embed/ksppH64LQ60" allowfullscreen></iframe>
    </Col>
    <Col xs="4" lg="2">
    <iframe class="align-items-center col-6 video-card" src="https://www.youtube.com/embed/ksppH64LQ60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </Col>
    <Row className="justify-content-center">
  <img src="/images/image3.png"/>
  </Row>
  <Row className="justify-content-center">
  <img src="/images/image4.png"/>
  </Row>
    <Button xs lg="2" variant="warning">Ajouter</Button>
  </Row>
</Container>
  );
}

export default App;