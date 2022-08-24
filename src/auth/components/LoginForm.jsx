import React from "react";
import Container from "react-bootstrap/Container";
import Input from "../../components/Input";
import BsForm from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import useAuth from "../hooks/UseAuth";
import { Formik, Form, validateYupSchema } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateWholeUser } from "../store/authSlice";

const REQUIRED_AUTHENTICATION = {
  email: "mathieu.theriault@cegeptr.qc.ca",
  password: "such-password1",
};

const initialValues = {
  email: "",
  name: "",
  password: "",
};

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[-_@\.A-Za-z\d]{8,}$/;

const LoginForm = () => {
  const auth = useAuth();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const formDataValuesMatchRequiredAuth = Object.entries({
      email: values.email,
      password: values.password,
    }).every(([key, value]) => REQUIRED_AUTHENTICATION[key] === value);
    dispatch(updateWholeUser({ name: values.name, email: values.email }));
    auth();
  };

  return (
    <Container fluid className="vh-100">
      <Container className="h-100 d-flex justify-content-center align-items-center">
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validateOnChange
          validationSchema={Yup.object({
            email: Yup.string()
              .required("This field is required")
              .email("Enter a valid email"),
            name: Yup.string().required("This field is required"),
            password: Yup.string()
              .required("The password is required")
              .matches(
                passwordRegex,
                "Password must contain 8 characters, at least one letter and number"
              ),
          })}
        >
          <Form as={BsForm} noValidate>
            <Row>
              <Col>
                <Input id="email" label="Email" type="email" required />
              </Col>
              <Col>
                <Input id="name" label="Name" required />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  id="password"
                  type="password"
                  label="Password"
                  autoComplete="current-password"
                  required
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Button className="w-100" type="submit">
                  Connexion
                </Button>
              </Col>
            </Row>
          </Form>
        </Formik>
      </Container>
    </Container>
  );
};

export default LoginForm;
