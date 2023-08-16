import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { url } from "../App";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminNavigation from "./AdminNavigation";

function AllQueries() {
  let navigate = useNavigate();

  let [allQueries, setAllQueries] = useState([]);

  //to get all the query details
  const getAllQueries = async () => {
    try {
      let res = await axios.get(`${url}/query/getAllQueries`);
      console.log(res);
      if (res.status === 200) {
        setAllQueries(res.data.query);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllQueries();
  }, []);

  return (
    <div className="text-white queries-list">
      <AdminNavigation />
      <div className="allQueries">
        <Table bordered className="mt-2 text-center p-3">
          <thead className="text-danger">
            <tr>
              <th>S.No</th>
              <th>QueryId</th>
              <th>CustomerName</th>
              <th>ProductCategory</th>
              <th>Brand</th>
              <th>DateOfPurchase</th>
              <th>Issue</th>
              <th>QueryRaisedOn</th>
              <th>Status</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {allQueries.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e._id}</td>
                  <td>{e.name}</td>
                  <td>{e.productCategory}</td>
                  <td>{e.BrandName}</td>
                  <td>{e.dateOfPurchase}</td>
                  <td>{e.issue}</td>
                  <td>{new Date(e.createdAt).toLocaleDateString("en-UK")}</td>
                  <td>{e.status}</td>
                  <td>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${e.email}&su=Query Support`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <Button className="me-2" variant="warning">
                        Mail
                      </Button>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AllQueries;
