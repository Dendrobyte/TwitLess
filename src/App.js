import logo from "./assets/logo.png";
import React from 'react';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to TwitLess... for it has officially hatched!</p>
      </header>
    </div>
  );
}

export default App;
