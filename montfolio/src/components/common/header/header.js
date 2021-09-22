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
        <div className="nav-maintop">
          <h1><a href="/">
            <img src="img/header-img/logo.png"></img>
            </a></h1>
          <div className="lnb menu">
            <ul class="menuLinks">
              <li>
                <NavLink activeClassName="active" exact to="/about">
                  소개
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/myproject">
                  프로젝트
                </NavLink>
              </li>
              <li>
                <a href="https://github.com/monho">
                  깃허브
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        {showmobile ? (
          <div className="lnb menu collapse">
            <ul class="mobileMenuLinks">
              <li>
                <NavLink
                  onClick={showmobileMenu}
                  activeClassName="active"
                  exact
                  to="/about"
                >
                  소개
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={showmobileMenu}
                  activeClassName="active"
                  to="/myproject"
                >
                  프로젝트
                </NavLink>
              </li>
              <li>
                <a href="https://github.com/monho">
                    깃허브
                </a>    
              </li>
            </ul>
          </div>
        ) : (
          <div> </div>
        )}

        <Switch>
          <Route path="/about">
            <div>
              <h1></h1>
            </div>
          </Route>
          <Route path="/users">
            <h1></h1>
          </Route>
        </Switch>
      </div>
    </Router>
  
    );
  };

  export default Header;
  