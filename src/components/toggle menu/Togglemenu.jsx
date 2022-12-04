import React from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import Navigati from "../../sections/navigation-bar/Navigationbar";
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
const Togglemenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
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
  );
};

export default Togglemenu;
