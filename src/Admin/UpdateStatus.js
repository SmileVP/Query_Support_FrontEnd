import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import AdminNavigation from "./AdminNavigation";

import { useNavigate } from "react-router-dom";

function UpdateStatus() {
  //to get the token from session storage
  let token = sessionStorage.getItem("token");

  let navigate = useNavigate();

  let userSchema = Yup.object().shape({
    queryId: Yup.string().required("Required"),
    status: Yup.string().required("Required"),
  });

  //function to update the query status
  const handleQueryStatus = async (values) => {
    try {
      let res = await axios.post(`${url}/query/updateStatus`, {
        queryId: values.queryId,
        Status: values.status,
      });
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/getAllQueries");
      }
      console.log(values);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <AdminNavigation />
      <Formik
        initialValues={{
          queryId: "",
          status: "",
        }}
        validationSchema={userSchema}
        onSubmit={(values) => {
          handleQueryStatus(values);
        }}
      >
        {({ errors, touched }) => (
          <div className=" d-flex justify-content-center pt-5">
            <div className="changeStatus p-5">
              <div className="login-header text-center text-danger ">
                <p>Change status</p>
              </div>

              <div className="d-flex justify-content-center">
                <Form>
                  <div className="form-status pt-1">
                    <label htmlFor="queryId" className="text-white">
                      QueryId
                    </label>
                    <Field
                      name="queryId"
                      className="form-control"
                      type="text"
                      placeholder="Enter your queryId"
                    />
                    {errors.queryId && touched.queryId ? (
                      <div style={{ color: "red" }}>{errors.queryId}</div>
                    ) : null}
                  </div>

                  <div className="form-status pt-2">
                    <label htmlFor="status" className="text-white">
                      Status
                    </label>
                    <Field
                      name="status"
                      className="form-control"
                      type="text"
                      placeholder="Enter status"
                    />
                    {errors.status && touched.status ? (
                      <div style={{ color: "red" }}>{errors.status}</div>
                    ) : null}
                  </div>

                  <div className="d-flex justify-content-center mt-5">
                    <Button variant="outline-secondary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default UpdateStatus;
