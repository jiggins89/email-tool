import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Logo
          </a>
          <ul className="right">
            <li>
              <a href="/surveys">Dashboard</a>
            </li>
            <li>
              <a href="/surveys/new">New</a>
            </li>
            <li>
              <a href="/auth/google">Login with Google</a>
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
