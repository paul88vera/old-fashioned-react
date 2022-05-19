import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const navbarOpen = document.getElementById('nav-container');
  const navbarClosed = document.getElementById('navbarClosed');

  function disappear() {
    navbarOpen.classList.add('toggleOff');
    // navbarClosed.classList.remove('toggleOn');
  }
  function appear() {
    navbarClosed.classList.add('toggleOn');
    navbarOpen.classList.remove('toggleOff')
  }

  return (
    <header id="header">
      <div id="nav-container">
        <div id="closed" className="toggleOff" onClick={appear}>--</div>
      <div id="open" className="toggleOn" onClick={disappear}>
        X
      </div>
      <nav className="open">
        <h1>
          <Link to="/">Old Fashioned | Bar</Link>
        </h1>
        <ul className="open">
          <li className="open">
            <Link to="/Gin">Gin</Link>
          </li>
          <li className="open">
            <Link to="/Bourbon">Bourbon</Link>
          </li>
          <li className="open">
            <Link to="/Vodka">Vodka</Link>
          </li>
        <h3 className="open">
          <Link to="/Login">Login</Link>
        </h3>
        </ul>
      </nav>
      </div>
    </header>
  );
}
