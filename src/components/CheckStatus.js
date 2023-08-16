import React, { useEffect, useState } from "react";
import MenuNavigation from "./MenuNavigation";
import axios from "axios";
import { url } from "../App";
import { Table } from "react-bootstrap";

function CheckStatus() {
  let email = sessionStorage.getItem("email");

  let [query, setQuery] = useState([]);

  console.log(email);

  let getQuery = async () => {
    try {
      let res = await axios.get(`${url}/query/getQuery/${email}`);
      setQuery(res.data.query);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuery();
  }, []);

  return (
    <>
      <MenuNavigation />
      <div className="checkStatus">
        <div className="">
          <Table bordered className=" text-center">
            <thead className="text-danger">
              <tr>
                <th>S.No</th>
                <th>QueryId</th>
                <th>ProductCategory</th>
                <th>Brand</th>
                <th>DateOfPurchase</th>
                <th>Issue</th>
                <th>QueryRaised on</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {query.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e._id}</td>
                    <td>{e.productCategory}</td>
                    <td>{e.BrandName}</td>
                    <td>{e.dateOfPurchase}</td>
                    <td>{e.issue}</td>
                    <td>{new Date(e.createdAt).toLocaleDateString("en-UK")}</td>
                    <td>{e.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CheckStatus;
