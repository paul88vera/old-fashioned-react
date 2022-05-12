import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return(
    <header id="header">
      <div id='close'>X</div>
      <nav>
        <h1><Link to="/">Old Fashioned</Link></h1>
        <ul>
          <li><Link to="/Gin">Gin</Link></li>
          <li><Link to="/Bourbon">Bourbon</Link></li>
          <li><Link to="/Vodka">Vodka</Link></li>
        </ul>
        <h3><Link to="/Login">Login</Link></h3>
      </nav>
    </header>
  )
}