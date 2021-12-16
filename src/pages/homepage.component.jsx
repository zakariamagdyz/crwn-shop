import React from "react";
import "./homepage.styles.scss";
import Directory from "../components/directory/directory.component";
import { useNavigate, useLocation, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
