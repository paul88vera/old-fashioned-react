
import { Link } from "react-router-dom";

function Header() {
  return(
    <header>
      <nav>
        <h1><Link to="/">Old FLinkshioned</Link></h1>
        <ul>
          <li><Link to="/Gin">Gin</Link></li>
          <li><Link to="/Bourbon">Bourbon</Link></li>
          <li><Link to="/Vodka">VodkLink</Link></li>
        </ul>
        <h3><Link to="/Login">Login</Link></h3>
      </nav>
    </header>
  )
}
export default Header;