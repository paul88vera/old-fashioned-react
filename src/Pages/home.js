// import Footer from "../components/Footer";
// import { BrowserRouter as Route } from "react-router-dom";
// import Header from "../components/Header";
function Home() {
  return (
    <section id="home">
      <header id="home-header">
        <h1>
          <a href="/">Old Fashioned</a>
        </h1>
        <h3>
          <a href="/Login">Login</a>
        </h3>
      </header>
      <nav id="home-nav">
        <ul>
          <h3>Pick your poison:</h3>
          <li>
            <a href="/Gin">Gin</a>
          </li>
          <li>
            <a href="/Bourbon">Bourbon</a>
          </li>
          <li>
            <a href="/Vodka">Vodka</a>
          </li>
          <li>
            <a href="/Create">Create your own drink</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Home;
