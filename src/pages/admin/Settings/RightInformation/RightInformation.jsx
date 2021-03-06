import React from "react";
import { Card } from "antd";
import { Formik } from "formik";

// import { InboxOutlined } from "@ant-design/icons";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  CustomInput,
  Button,
  // FormFeedback,
  // FormText,
} from "reactstrap";
import { connect } from "react-redux";
import { autoLogin, editUserThunk } from "../../../../store/user/actions";

// const { Dragger } = Upload;

const initialValues = {
  ism: "",
  familiya: "",
  link: "",
  telegram: "",
  phonenumber: "",
  abouteme: "",
  image: "",
  qr_code: "",
};

function RightInformation(props) {
  console.log("bu id====================================");
  console.log(props.user_id);
  console.log("====================================");
  return (
    <Card>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            let formData = new FormData();

            formData.append("first_name", values.ism);
            formData.append("last_name", values.familiya);
            formData.append("image", values.image);
            formData.append("about_me", values.abouteme);
            formData.append("social_link", values.link);
            formData.append("telegram", values.telegram);
            formData.append("phone", values.phonenumber);
            formData.append("qr_code", values.qr_code);

            props.editUserThunk(formData);
            resetForm();
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
          setFieldValue,
          /* and other goodies */
        }) => {
          return (
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
                    <Label for="phonenumber">Phonenumber</Label>
                    <Input
                      // className="is-valid"
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
                      // className="text-danger font-weight-bold"
                    >
                      Abouteme
                    </Label>
                    <Input
                      // className="is-invalid"
                      type="textarea"
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

              <div className="mb-3">
                <FormGroup>
                  <Label for="image">File Browser with Custom Label</Label>
                  <CustomInput
                    type="file"
                    id="image"
                    name="image"
                    label="Yo, pick a file!"
                    onChange={(event) => {
                      setFieldValue("image", event.currentTarget.files[0]);
                    }}
                  />
                </FormGroup>
              </div>

              <Button
                type="submit"
                className="btn btn-info"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  user_id: state.userReducer.user.id,
});

const mapDispatchToProps = {
  editUserThunk,
  autoLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(RightInformation);
