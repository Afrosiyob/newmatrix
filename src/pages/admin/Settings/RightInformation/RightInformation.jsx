import React from "react";
import { Card } from "antd";
import { Formik } from "formik";
import * as Yup from "yup";
// import { InboxOutlined } from "@ant-design/icons";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  CustomInput,
  FormFeedback,
  FormText,
} from "reactstrap";

// const { Dragger } = Upload;

// const props = {
//   name: "file",
//   multiple: true,
//   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== "uploading") {
//       console.log(info.file, info.fileList);
//     }
//     if (status === "done") {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === "error") {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };

const initialValues = {
  ism: "",
  familiya: "",
  link: "",
  telegram: "",
  phonenumber: "",
  abouteme: "",
  image: "",
};

const userEditSchema = Yup.object().shape({
  ism: Yup.string().required("required"),
  familiya: Yup.string().required("required"),
  link: Yup.string().required("required"),
  telegram: Yup.string().required("required"),
  phonenumber: Yup.string().required("required"),
  abouteme: Yup.string().required("required"),
  image: Yup.mixed().required("required"),
});

function RightInformation() {
  return (
    <Card>
      <Formik
        validationSchema={userEditSchema}
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            let formData = new FormData();

            formData.append("image", values.image);

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

                  {errors.ism && touched.ism ? (
                    <p className="font-weight-bold text-danger">{errors.ism}</p>
                  ) : null}
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
                  {errors.familiya && touched.familiya ? (
                    <p className="font-weight-bold text-danger">
                      {errors.familiya}
                    </p>
                  ) : null}
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
                  {errors.link && touched.link ? (
                    <p className="font-weight-bold text-danger">
                      {errors.link}
                    </p>
                  ) : null}
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
                  {errors.telegram && touched.telegram ? (
                    <p className="font-weight-bold text-danger">
                      {errors.telegram}
                    </p>
                  ) : null}
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

                  {errors.phonenumber && touched.phonenumber ? (
                    <p className="font-weight-bold text-danger">
                      {errors.phonenumber}
                    </p>
                  ) : null}
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
                    type="textarea"
                    name="abouteme"
                    id="abouteme"
                    placeholder="abouteme"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.abouteme}
                  />
                  {errors.abouteme && touched.abouteme ? (
                    <p className="font-weight-bold text-danger">
                      {errors.abouteme}
                    </p>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>

            <div className="mb-3">
              {/* <Dragger {...props} listType="picture">
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
              </Dragger> */}

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
                {errors.image && touched.image ? (
                  <p className="font-weight-bold text-danger">{errors.image}</p>
                ) : null}
              </FormGroup>
            </div>

            <button
              type="submit"
              className="btn btn-info"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Card>
  );
}

export default RightInformation;
