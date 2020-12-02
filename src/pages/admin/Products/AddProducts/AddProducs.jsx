import React from "react";

import { Formik } from "formik";
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
import { Card } from "antd";
import { connect } from "react-redux";
import { addProductThunk } from "../../../../store/products/actions";

function AddProducs(props) {
  return (
    <div>
      <Card bordered={false}>
        <h4 className="w-100 text-muted mb-3">Add producs</h4>
        <Formik
          initialValues={{
            product_name: "",
            product_description: "",
            product: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              props.addProductThunk(values);

              const formData = new FormData();

              formData.append('name', values.product_name);
              formData.append('description', values.product_description);
              formData.append('product')


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
              <Col sm="12" md="6" className="mb-3">
                <FormGroup>
                  <Label for="product_name">Product Name</Label>
                  <Input
                    type="text"
                    name="product_name"
                    id="product_name"
                    placeholder="with a placeholder"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.product_name}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="6" className="mb-3">
                <FormGroup>
                  <Label for="product_description">Product Name</Label>
                  <Input
                    type="text"
                    name="product_description"
                    id="product_description"
                    placeholder="with a placeholder"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.product_description}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="6" className="mb-3">
                <FormGroup>
                  <Label for="product"> Product </Label>
                  <Input
                    type="file"
                    name="product"
                    id="product"
                    placeholder="with a placeholder"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.product_description}
                  />
                </FormGroup>
              </Col>

              {/* {errors.email && touched.email && errors.email} */}

              <Button
                type="submit"
                className="btn-info"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}

const mapDispatchToProps = {
  addProductThunk,
};

export default connect(null, mapDispatchToProps)(AddProducs);
