import React from "react";
import "./Brand.css";
import logo from "./logo.png";

const Brand = ({ channel }) => {
  return (
    <div className="brand">
      <div className="brand__name">
        <img className="brand__logo" src={logo} alt="" />
        <h2>TikTok</h2>
      </div>
      <h3>@{channel}</h3>
    </div>
  );
};

export default Brand;
