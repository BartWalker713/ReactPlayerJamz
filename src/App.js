import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
    <Nav />
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
