import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import "./App.scss";

function App() {
  return (
    <div>
      <Router>
        <div className="Navigation">
          <div className="NavContainer">
            <div className="Brand">
              <Link to="/" style={{ color: "#ec352c" }}>
                PORTFOLIO
              </Link>
            </div>
            <nav className="nav-list">
              <button>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "selected" : "unselected"
                  }
                >
                  Home
                </NavLink>
              </button>
              <button>
                <NavLink
                  to="projects"
                  className={({ isActive }) =>
                    isActive ? "selected" : "unselected"
                  }
                >
                  Projects
                </NavLink>
              </button>
              <button>
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    isActive ? "selected" : "unselected"
                  }
                >
                  About
                </NavLink>
              </button>
              <button>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? "selected" : "unselected"
                  }
                >
                  Contact
                </NavLink>
              </button>
            </nav>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
