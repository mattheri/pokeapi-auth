import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import useAuth from "../hooks/UseAuth";

const LoginForm = () => {
  const auth = useAuth();

  return (
    <Container fluid className="vh-100">
      <Container className="h-100 d-flex justify-content-center align-items-center">
        <Button onClick={auth}>Connexion</Button>
      </Container>
    </Container>
  );
};

export default LoginForm;
