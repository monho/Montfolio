import React from "react"
import { useState } from "react"
import "./header.css"
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Link,
} from "react-router-dom"


const Header = () => {
  const [showmobile, setShowmobile] = useState(false)

  const showmobileMenu = () => {
    setShowmobile(!showmobile)
  }

    return (
      <Router>

      <nav className="navigationBar">

        <div className="mobileNavButton" onClick={showmobileMenu}>
          <span className="mobileNavButtonLines" />
          <span className="mobileNavButtonLines" />
          <span className="mobileNavButtonLines" />
        </div>
        <a href="/">
            <h1>MONTFOLIO</h1>
          </a>
        <ul class="menuLinks">

          <li>
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/users">
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        {showmobile ? (
          <div>
            <ul class="mobileMenuLinks">
              <li>
                <NavLink
                  onClick={showmobileMenu}
                  activeClassName="active"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={showmobileMenu}
                  activeClassName="active"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={showmobileMenu}
                  activeClassName="active"
                  to="/users"
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div> </div>
        )}

        <Switch>
          <Route path="/about">
            <div>
              <h1>First page</h1>
            </div>
          </Route>
          <Route path="/users">
            <h1>Second page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  
    );
  };

  export default Header;
  