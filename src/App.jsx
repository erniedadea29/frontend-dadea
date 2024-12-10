import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './Home';
import About from './About';
import Education from './Education';
import Hobbies from './Hobbies';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
       <Navbar expand="lg" style={{ backgroundColor: '#579e9b' }}>
          <Container>
            <Navbar.Brand as={Link} to="/" style={{ color: 'white', fontWeight: 'bold' }}>
              MY PERSONAL INFO
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" style={{ color: 'white' }}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/About" style={{ color: 'white' }}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/Education" style={{ color: 'white' }}>
                  Education
                </Nav.Link>
                <Nav.Link as={Link} to="/Hobbies" style={{ color: 'white' }}>
                  Hobbies
                </Nav.Link>
                <Nav.Link as={Link} to="/Contact" style={{ color: 'white' }}>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Hobbies" element={<Hobbies />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
