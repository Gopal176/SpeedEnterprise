import React from "react";
import { TbBulb } from "react-icons/tb";
import "./navigationbar.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

const Nav = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#rubberstamp">Rubber Stamp</a>
    </p>
    <p>
      <a href="#preinkstamp">Preink stamp</a>
    </p>
    <p>
      <a href="#selfinkstamp">Selfinking stamp</a>
    </p>
    <p>
      <a href="#About us">About us</a>
    </p>
  </>
);
const Navigationbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navigation__bar">
      <div className="navigation__bar-categories">
        <p>
          <HiOutlineMenuAlt1 size={28} />
          &nbsp; &nbsp; Categories
        </p>
      </div>
      <div className="navigation__bar-links">
        <Nav />
      </div>

      <div className="navigationbar__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="navigationbar__navbar-menu_container">
            <Nav />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigationbar;
