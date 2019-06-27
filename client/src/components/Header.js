import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
          <ul>
            <li>User Email: {this.props.auth.email}</li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </ul>
        );
    }
  }

  render() {
    console.log(this.props.auth);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            href="/"
            className="left brand-logo"
          >
            Logo
          </Link>
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
