import React from 'react';
import { FormControl, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div class="container">
    <div class="row">
      <div class="col">
      <Navbar bg="warning" variant="dark">
      <img href="../src/images/logo.png"></img>
      <div class="col">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Profile</Nav.Link>
        </Nav>
        </div>
    </Navbar>
      </div>
    </div>
    </div>
  );
}

export default App;