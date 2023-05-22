import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import dashboardRoutes from "routes";

class Footer extends Component {
  render() {
    const activeRoute = (routeName) => {
      return location.pathname.indexOf(routeName) > -1 ? "active" : "";
    };
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <Nav>
            {dashboardRoutes.map((route, key) => {
              if (!route.redirect)
                return (
                  <li
                    className={
                      route.upgrade
                        ? "active active-pro"
                        : activeRoute(route.path)
                    }
                    key={key}
                  >
                    <NavLink to={route.path} className="nav-link">
                      {route.name}
                    </NavLink>
                  </li>
                );
              return null;
            })}
          </Nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
