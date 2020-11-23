import React, { useState } from "react";
import { Formik } from "formik";
import "./SignUp.scss";
import { Col, Form, Row, FormGroup, Label, Input, Alert } from "reactstrap";
import Ripples from "react-ripples";
import axios from "axios";

// import { Alert } from "reactstrap";

const SignUpValues = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  skype: "",
  phone: "",
  link: "",
  partner: "",
  robot: "",
};

function SignUp(props) {
  console.log(props);
  const [visible, setVisible] = useState(false);

  const [alertColor, setAlertColor] = useState("");
  const [alertMessage, setAlertmessage] = useState("");

  const onDismiss = () => setVisible(false);
  return (
    <div className="sign-up-modal">
      <h1 className="text-muted font-weight-bold mb-5"> Sign Up </h1>

      <Formik
        initialValues={SignUpValues}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = "Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "Invalid email address";
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);

            const formData = new FormData();

            formData.append("username", values.userName);
            formData.append("password1", values.password);
            formData.append("password2", values.confirmPassword);
            formData.append("email", values.email);
            formData.append("phone", values.phone);
            formData.append("parent_username", values.partner);

            const url = "http://b7d71dee69c7.ngrok.io/api/register/";
            // const config = {
            //   headers: {
            //     Authorization: "Bearer my-token",
            //     "My-Custom-Header": "foobar",
            //   },
            // };

            axios
              .post(url, formData)
              .then((response) => {
                console.log(response);

                setVisible(true);
                setAlertColor("success");
                setAlertmessage("Ma'lumotlar moffaqiyatli kiritildi ");
                setTimeout(() => {
                  setVisible(false);
                }, 2000);
              })
              .catch((error) => {
                console.error("There was an error!", error.response.data);
                console.error("There was an error!", error.request);
              });
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit} className="custom-form">
            <Row>
              <Col sm="12" md="6">
                <FormGroup>
                  <Input
                    className="custom-input"
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="userName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="6">
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="6">
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="6">
                <FormGroup>
                  <Input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="6">
                <FormGroup>
                  <Input
                    type="text"
                    name="skype"
                    id="skype"
                    placeholder="skype"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.skype}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="6">
                <FormGroup>
                  <Input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col sm="12" md="6">
                <FormGroup>
                  <Input
                    type="text"
                    name="link"
                    id="link"
                    placeholder="link"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.link}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="6">
                <FormGroup>
                  <Input
                    type="text"
                    name="partner"
                    id="partner"
                    placeholder="partner"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.partner}
                  />
                </FormGroup>
              </Col>
            </Row>

            {/* <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password} */}

            <Row>
              <Col sm="12" md="6">
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="robot"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.robot}
                    />{" "}
                    I am not robot
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="12" md="6">
                <a href="#!" className="text-muted font-weight-bold">
                  Forgon password
                </a>
              </Col>
            </Row>

            <Ripples
              color="rgba(255,255,255,0.5)"
              className="mt-3 rounded-pill"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="header-btn  px-5 py-2 rounded-pill"
              >
                Sign Up
              </button>
            </Ripples>

            <Alert
              className="my-3"
              color={alertColor}
              isOpen={visible}
              toggle={onDismiss}
            >
              {alertMessage}
            </Alert>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
