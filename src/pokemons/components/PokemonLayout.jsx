import React, { useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useSignout from "../../auth/hooks/UseSignout";

const PokemonLayout = () => {
  const navbarId = "navbar";
  const disconnect = useSignout();

  return (
    <Container fluid>
      <Navbar>
        <Navbar.Brand as={Link} to="/pokemon">
          Pokemon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={navbarId} />
        <Navbar.Collapse id={navbarId}>
          <Nav className="me-auto">
            <Nav.Link as={Button} onClick={disconnect}>
              Déconnexion
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </Container>
  );
};

export default PokemonLayout;
