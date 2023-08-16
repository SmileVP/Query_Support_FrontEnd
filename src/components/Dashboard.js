import React from "react";
import Navigation from "./Navigation";
import Home from "./Home";

function Dashboard() {
  return (
    <>
      <div className="home">
        <Navigation />
        <Home />
      </div>
    </>
  );
}

export default Dashboard;
