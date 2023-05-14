//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
        <p>
          Welcome to ARORA Sim
        </p>
        <a
          className="App-link"
          href="https://arorasim.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          arorasim.ai
        </a>
      </header>
    </div>
  );
}

export default App;
