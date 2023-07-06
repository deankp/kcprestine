import React, { useState, useEffect } from "react";
import Logo from "../Images/KCPD_Transparent.png";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 35) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  // console.log(window.scrollY);

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      {/* LOGO IMAGE */}
      <div className="logo">
        <a href="/" className="logo">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      {/* NAV MENU */}
      <div className="nav-menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
