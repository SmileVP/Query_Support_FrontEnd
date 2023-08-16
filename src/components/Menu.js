import React from "react";
import Button from "react-bootstrap/Button";
import MenuNavigation from "./MenuNavigation";
import { useNavigate } from "react-router-dom";

function Menu() {
  let navigate = useNavigate();

  return (
    <>
      <div className="fixed-top">
        {" "}
        <MenuNavigation />
      </div>

      <div className="menu-body d-flex justify-content-center align-items-center ">
        <div>
          <h2 className="text-white">
            We are here to <span className="name-hd">resolve</span>
            <br /> your query!!!!
          </h2>
          <Button
            variant="outline-warning"
            className="m-5"
            size="lg"
            onClick={() => navigate("/createQuery")}
          >
            Create Query
          </Button>

          <Button
            variant="outline-warning"
            className="m-5"
            size="lg"
            onClick={() => navigate("/checkStatus")}
          >
            Check Status
          </Button>
        </div>
      </div>
    </>
  );
}

export default Menu;
