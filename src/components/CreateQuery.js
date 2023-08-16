import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateQuery() {
  let navigate = useNavigate();

  let email = sessionStorage.getItem("email");

  //to set condition for formik
  let QuerySchema = yup.object().shape({
    productCategory: yup.string().required("Required"),
    BrandName: yup.string().required("Required"),
    date: yup.string().required("Required"),
    issue: yup.string().required("Required"),
  });

  //to create query
  let createQuery = async (values) => {
    try {
      let res = await axios.post(`${url}/query/create-query`, {
        productCategory: values.productCategory,
        BrandName: values.BrandName,
        date: values.date,
        issue: values.issue,
        email: email,
      });
      if (res.status === 201) {
        toast.success(res.data.message);
        navigate("/menu");
      }
      console.log(values);
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <Formik
          initialValues={{
            productCategory: "",
            BrandName: "",
            date: "",
            issue: "",
          }}
          validationSchema={QuerySchema}
          onSubmit={(values) => {
            createQuery(values);
          }}
        >
          {({ errors, touched }) => (
            <div className="container-fluid customer-query">
              <div className="customer-queryForm">
                <div className="customer-signUp-title">
                  <h1>Welcome to Query Support</h1>
                </div>

                <div className=" customer-SignUp-header text-center text-danger">
                  <p>Query - Form</p>
                </div>

                <Form>
                  <div className="form-group">
                    <label htmlFor="productCategory" className="text-white">
                      Product Category
                    </label>
                    <Field
                      name="productCategory"
                      className="form-control"
                      type="text"
                      placeholder="ex-Washing machine,Fridge,...."
                    />
                    {errors.productCategory && touched.productCategory ? (
                      <div style={{ color: "red" }}>
                        {errors.productCategory}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group pt-2">
                    <label htmlFor="BrandName" className="text-white">
                      BrandName
                    </label>
                    <Field
                      name="BrandName"
                      className="form-control"
                      type="text"
                      placeholder="ex-LG,Croma,Samsung,..."
                    />
                    {errors.BrandName && touched.BrandName ? (
                      <div style={{ color: "red" }}>{errors.BrandName}</div>
                    ) : null}
                  </div>

                  <div className="form-group pt-2">
                    <label htmlFor="date" className="text-white">
                      Date of Purchase
                    </label>
                    <Field
                      name="date"
                      className="form-control"
                      type="text"
                      placeholder="ex-16/08/23"
                    />

                    {errors.date && touched.date ? (
                      <div style={{ color: "red" }}>{errors.date}</div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="issue" className="text-white">
                      Describe the issue
                    </label>
                    <Field
                      as="textarea"
                      name="issue"
                      className="form-control"
                      type="textArea"
                      placeholder="Enter issue"
                    />
                    {errors.issue && touched.issue ? (
                      <div style={{ color: "red" }}>{errors.issue}</div>
                    ) : null}
                  </div>

                  <div className="d-flex justify-content-center mt-2">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}

export default CreateQuery;
