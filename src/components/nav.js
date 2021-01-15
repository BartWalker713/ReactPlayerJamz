import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styling/navstyle.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from "reactstrap";
export default function Nav() {
  return (
    <div>
      <div className="divOut">
        <div className="logo-new">
          <Link to="/">PLAYERJAMZ</Link>
        </div>
        <ul className="ulStyle">
          <li className="list-style">
            <Link to="/">Home</Link>
          </li>
          <li className="list-style">
            <Link to="/about">About</Link>
          </li>
          <li className="list-style">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="buttonNav">
          <Button type="submit" color="danger">
            LOGIN
          </Button>
        </div>
      </div>
    </div>
  );
}