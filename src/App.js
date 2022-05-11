import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./components/Home";
// import Header from "./components/Header";
import Gin from "./Pages/gin";
import Bourbon from "./Pages/bourbon";
import Vodka from "./Pages/vodka";

function App() {
  return (
    <Router>
      <main className="main-page">
        {/* <Header /> */}
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/Gin" element={<Gin />}></Route>
            <Route exact path="/Bourbon" element={<Bourbon />}></Route>
            <Route exact path="/Vodka" element={<Vodka />}></Route>
            <Route exact path="/Login" element={<Login />}></Route>
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;