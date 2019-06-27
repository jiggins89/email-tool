import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login</a>
          </li>
        );
      default:
        return (
          // (
          //   <li>
          //     <a href="/surveys">Dashboard</a>
          //   </li>
          // ),
          // (
          //   <li>
          //     <a href="/surveys/new">New</a>
          //   </li>
          // ),
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Logo
          </a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
