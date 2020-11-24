import React from "react";
import { Card, Upload, message } from "antd";
import { Formik } from "formik";

import { InboxOutlined } from "@ant-design/icons";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

const { Dragger } = Upload;

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

function RightInformation() {
  return (
    <Card>
      <Formik
        initialValues={initialValues}
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
                  <Label for="ism">Ism</Label>
                  <Input
                    type="text"
                    name="ism"
                    id="ism"
                    placeholder="Ismingizni kiriting"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.ism}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="6" className="mb-3">
                <FormGroup>
                  <Label for="familiya">Familiya</Label>
                  <Input
                    type="text"
                    name="familiya"
                    id="familiya"
                    placeholder="Familiyangizni kiriting"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.familiya}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="6" className="mb-3">
                <FormGroup>
                  <Label for="link">Link</Label>
                  <Input
                    type="text"
                    name="link"
                    id="link"
                    placeholder="Link kiriting"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.link}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="6" className="mb-3">
                <FormGroup>
                  <Label for="telegram">Telegram</Label>
                  <Input
                    type="text"
                    name="telegram"
                    id="telegram"
                    placeholder="Telegram"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.telegram}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="6" className="mb-3">
                <FormGroup>
                  <Label
                    for="phonenumber"
                    className="font-weight-bold text-success"
                  >
                    phonenumber
                  </Label>
                  <Input
                    className="is-valid"
                    type="text"
                    name="phonenumber"
                    id="phonenumber"
                    placeholder="Phonenumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phonenumber}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="6" className="mb-3">
                <FormGroup>
                  <Label
                    for="abouteme"
                    className="text-danger font-weight-bold"
                  >
                    abouteme
                  </Label>
                  <Input
                    className="is-invalid"
                    type="text"
                    name="abouteme"
                    id="abouteme"
                    placeholder="abouteme"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.abouteme}
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
