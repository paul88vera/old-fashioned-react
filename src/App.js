import Home from './Pages/home.js';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
      <Header />
        <Route exact path="/">
          <Home />
        </Route>
      <Footer />
      </Switch>
    </Router>
  );
}

export default App;
