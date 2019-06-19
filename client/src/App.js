import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://www.johnhiggins.io/images/logo.png"
          className="App-logo"
          alt="logo"
        />
        <p>How are ya scan?</p>
        <a className="App-link" href="/auth/google">
          Sign in with google
        </a>
      </header>
    </div>
  );
}

export default App;
