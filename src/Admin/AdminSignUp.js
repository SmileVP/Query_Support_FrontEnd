import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Row } from "react-bootstrap";

function AdminSignUp() {
  let navigate = useNavigate();

  //to set condition for password
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  //to set condition for formik
  let CustomerSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    password: yup
      .string()
      .matches(
        passwordRules,
        "Password length  minimum 8 character and contains uppercase(A-Z) lowercase(a-z) and number(0-9)."
      )
      .required("Required"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "ConfirmPassword should be same as password"
      )
      .required("Required"),
    mobile: yup.string().required("Required"),
  });

  //to post the customer details in db
  let handleSignUp = async (values) => {
    try {
      let res = await axios.post(`${url}/admin-sign-up`, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        mobile: values.mobile,
      });

      if (res.status === 201) {
        toast.success(res.data.message);
        navigate("/admin-login");
      }
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
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            mobile: "",
          }}
          validationSchema={CustomerSchema}
          onSubmit={(values) => {
            handleSignUp(values);
          }}
        >
          {({ errors, touched }) => (
            <div className="container-fluid customer-signUp">
              <div className="customer-signUpForm">
                <div className="customer-signUp-title">
                  <h1>Welcome to Query Support</h1>
                </div>

                <div className=" customer-SignUp-header text-center text-danger">
                  <p>Admin-SignUp</p>
                </div>

                <Form>
                  <Row>
                    <div className="form-group col">
                      <label htmlFor="firstName" className="text-white">
                        FirstName
                      </label>
                      <Field
                        name="firstName"
                        className="form-control"
                        type="text"
                        placeholder="Enter firstName"
                      />
                      {errors.firstName && touched.firstName ? (
                        <div style={{ color: "red" }}>{errors.firstName}</div>
                      ) : null}
                    </div>

                    <div className="form-group col">
                      <label htmlFor="lastName" className="text-white">
                        LastName
                      </label>
                      <Field
                        name="lastName"
                        className="form-control"
                        type="text"
                        placeholder="Enter lastName"
                      />
                      {errors.lastName && touched.lastName ? (
                        <div style={{ color: "red" }}>{errors.lastName}</div>
                      ) : null}
                    </div>
                  </Row>

                  <div className="form-group">
                    <label htmlFor="email" className="text-white">
                      Email
                    </label>
                    <Field
                      name="email"
                      className="form-control"
                      type="email"
                      placeholder="Enter Email"
                    />
                    {errors.email && touched.email ? (
                      <div style={{ color: "red" }}>{errors.email}</div>
                    ) : null}
                  </div>

                  <div className="form-group pt-2">
                    <label htmlFor="password" className="text-white">
                      Password
                    </label>
                    <Field
                      name="password"
                      className="form-control"
                      type="password"
                      placeholder="Enter password"
                    />
                    {errors.password && touched.password ? (
                      <div style={{ color: "red" }}>{errors.password}</div>
                    ) : null}
                  </div>

                  <div className="form-group pt-2">
                    <label htmlFor="confirmPassword" className="text-white">
                      ConfirmPassword
                    </label>
                    <Field
                      name="confirmPassword"
                      className="form-control"
                      type="password"
                      placeholder="Enter confirmPassword"
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <div style={{ color: "red" }}>
                        {errors.confirmPassword}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="mobile" className="text-white">
                      Mobile
                    </label>
                    <Field
                      name="mobile"
                      className="form-control"
                      type="text"
                      placeholder="Enter mobile"
                    />
                    {errors.mobile && touched.mobile ? (
                      <div style={{ color: "red" }}>{errors.mobile}</div>
                    ) : null}
                  </div>

                  <div className="d-flex justify-content-center mt-2">
                    <Button variant="primary" type="submit">
                      Sign-Up
                    </Button>
                  </div>
                </Form>

                <div className="mt-3 text-center pb-2">
                  <h5>Already have an account? Please Login</h5>
                  <Button
                    variant="success"
                    onClick={() => navigate("/admin-login")}
                  >
                    Admin Login
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}

export default AdminSignUp;
