// import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import "./NavBar.css";
interface NavBarProps {
  dark: boolean;
  OnHandleClick: () => void;
}
function NavBar({ dark, OnHandleClick }: NavBarProps) {
  return (
    <>
      <nav className="nav">
        <div className="nav-brand">
          <span>Mad</span>
        </div>

        <ul className="nav-list">
          <li className="nav-list-item">Home</li>

          <li className="nav-list-item">About</li>

          <li className="nav-list-item">Skills</li>

          <li className="nav-list-item">Projects</li>

          <li className="nav-list-item">Contact</li>
        </ul>
        <button className="dark-btn" onClick={OnHandleClick}>
          {dark ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </nav>
    </>
  );
}

export default NavBar;
