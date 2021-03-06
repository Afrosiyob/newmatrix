import React from "react";

import { Formik } from "formik";
import { Col, Form, FormGroup, Input } from "reactstrap";
import Ripples from "react-ripples";

import { connect } from "react-redux";
import { fetchUser } from "../../../store/user/actions";
import { useHistory } from "react-router-dom";
import "./SignIn.scss";

const SignInValues = {
  userName: "",
  password: "",
};

function SignIn(props) {
  let history = useHistory();

  return (
    <div className="sign-in-modal">
      <h1 className="text-muted font-weight-bold mb-5"> Sign in </h1>
      <Formik
        initialValues={SignInValues}
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
            const formData = new FormData();
            formData.append("username", values.userName);
            formData.append("password", values.password);

            props.fetchUser(formData, history);
            setSubmitting(false);
          }, 0);
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
          <Form onSubmit={handleSubmit}>
            <Col>
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
            <Col>
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
            <Ripples
              color="rgba(255,255,255,0.5)"
              className="mt-3 rounded-pill"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="header-btn  px-5 py-2 rounded-pill"
              >
                Sign In
              </button>
            </Ripples>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
});

const mapDispatchToProps = {
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
