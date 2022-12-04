import React from "react";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar__main">
      <div className="topbar__main-components">
        <div className="topbar__main-components_number">
          <p>Call: (+91) 79901 92951</p>
        </div>
        <div className="topbar__main-components_discount">
          <p>
            Summer Sale Discount <span>50% Off</span>
          </p>
        </div>
        <div className="topbar__main-components_div">
          <p>English</p>
          <p>INR</p>
          <p>Find a Store</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
