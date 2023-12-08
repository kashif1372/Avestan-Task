import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {

  const [menu,setMenu] = useState(false);

  function hidemenu() {
    setMenu(false);
  }
  function showmenu() {
    setMenu(true);
  }

  return (
    <>
      <nav>
        <a href="#" className="logo">
          AVESTAN TECH
        </a>
        <div className={menu?"nav-links showmenu":"nav-links"}>
          <i className="fa-solid fa-xmark" onClick={hidemenu} />
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">COURSE</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
        <i className="fa-solid fa-bars" onClick={showmenu} />
      </nav>
    </>
  );
}
