import React from "react";
import "./mainmenu.css";
import logo from "../../assets/speed-logo.png";
import Togglemenu from "../../components/toggle menu/Togglemenu";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Mainmenu = () => {
  return (
    <div className="main-menu__color">
      <div className="main-menu__main">
        <div className="main-menu__logo">
          <img src={logo} alt="speedlogo" />
        </div>
        <div className="main-menu__searchbar">
          <input type="text" placeholder="Search Products.." />
        </div>
        <div class="main-menu__links">
          <p>
            <a href="#Login">Login/Register</a>
          </p>
        </div>
        <div className="main-menu__icons">
          <div>
            <AiOutlineHeart size={25} color="red" />
          </div>
          <div>
            <AiOutlineShoppingCart size={25} />
          </div>
        </div>
        <Togglemenu />
      </div>
    </div>
  );
};

export default Mainmenu;
