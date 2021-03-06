import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section id="home">
      <header id="home-header">
        <h1>
          <Link to="/">Old Fashioned | Bar</Link>
        </h1>
        <h3>
          <Link to="/Login">Login</Link>
        </h3>
      </header>
      <nav id="home-nav">
        <ul>
          <h3>Pick your poison:</h3>
          <li>
            <Link to="/Gin">Gin</Link>
          </li>
          <li>
            <Link to="/Bourbon">Bourbon</Link>
          </li>
          <li>
            <Link to="/Vodka">Vodka</Link>
          </li>
          <li>
            <Link to="/Create">Create your own drink</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}