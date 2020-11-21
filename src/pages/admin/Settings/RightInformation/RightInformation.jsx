import React from "react";
import { Card, Upload, message } from "antd";
import { Formik } from "formik";

import { InboxOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
} from "reactstrap";

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const initialValues = {
  ism: "",
  familiya: "",
  link: "",
  telegram: "",
  phonenumber: "",
  abouteme: "",
  image: "",
};

const { Dragger } = Upload;
function RightInformation() {
  return (
    <Card>
      <Formik
        initialValues={initialValues}
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
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col sm="12" md="6" className="mb-3">
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="6" className="mb-3">
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="6" className="mb-3">
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="6" className="mb-3">
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="6" className="mb-3">
                <FormGroup>
                  <Label
                    for="exampleEmail"
                    className="font-weight-bold text-success"
                  >
                    Email
                  </Label>
                  <Input
                    className="is-valid"
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="6" className="mb-3">
                <FormGroup>
                  <Label
                    for="exampleEmail"
                    className="text-danger font-weight-bold"
                  >
                    Email
                  </Label>
                  <Input
                    className="is-invalid"
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Col className="mb-3">
              <Dragger {...props} listType="picture">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from
                  uploading company data or other band files
                </p>
              </Dragger>
            </Col>

            <input
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
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Card>
  );
}

export default RightInformation;
