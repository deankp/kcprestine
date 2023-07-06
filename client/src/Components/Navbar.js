import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      {/* LOGO IMAGE */}
      <a href="/" className="logo">
        KC
      </a>
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
