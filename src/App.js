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
    <iframe class="align-items-center col-12 mt-5 video" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
    </Col>
  </Row>
  <Row className="justify-content-center">
  <img src="/images/image1.png"/>
  </Row>
  <Row className="justify-content-center">
    <Col xs lg="2">
    <iframe class="align-items-center col-6 video-card" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
    </Col>
    <Col xs="4" lg="2">
    <iframe class="align-items-center col-6 video-card" src="https://www.youtube.com/watch?v=J8uyhOvGAgo" allowfullscreen></iframe>
    </Col>
    <Button xs lg="2" variant="warning">Voir plus</Button>
  </Row>
</Container>
  );
}

export default App;