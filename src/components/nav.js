import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
//import "../styling/navstyle.css";


export default function Nav() {
    return  (
    <div>
        <nav className="nav-style">
          <ul className="ul-list-style">
            <li className="list-style">
              <Link to="/" className="link-style2">Home</Link>
            </li>
            <li className="list-style">
              <Link to="/about">About</Link>
            </li>
            <li className="list-style">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    </div>
    )
}

