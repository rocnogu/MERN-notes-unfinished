import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
//
//
export default function Nbar() {
  //
  return (
    <div className="container">
      <Router>

      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          
          <Navbar.Brand href="home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            





            <Nav className="me-auto">


              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/notes">Notes</Nav.Link>
              <Nav.Link href="/create">CreateNode</Nav.Link>


              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="home">
                  Dropdown Home
                </NavDropdown.Item>
                <NavDropdown.Item href="notes">
                  Dropdown Notes 
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="create">
                Dropdown CreateNode
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>

          <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">rocnogu</a>
      </Navbar.Text>
    </Navbar.Collapse>

        </Container>
      </Navbar>
      </Router>


    </div>
  );
}
