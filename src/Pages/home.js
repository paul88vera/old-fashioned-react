import Footer from "../components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
function Home() {
  return(
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default Home;