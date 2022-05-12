import React from "react";
import { Link } from "react-router-dom";

export default function Header() {


  return (
    <header id="header">
      <div id="open" className="open">
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
    </header>
  );
}
