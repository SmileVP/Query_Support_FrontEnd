import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  return (
    // <--Home page details-->
    <div className="d-flex justify-content-center " id="home">
      <div className="caption-header">
        <div className="home-hd">Welcome to Query Support!</div>
        <h2>
          We are here to <span className="name-hd">resolve</span>
          <br /> your query!!!!
        </h2>

        <Button
          className="d-flex justify-content-center "
          variant="danger"
          onClick={() => navigate("/customer-login")}
        >
          Raise Query
        </Button>
      </div>
    </div>
  );
}

export default Home;
