import React from 'react';
import stonk from './stonks.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="home-header">
      <div className="stonk">
      <img src={stonk} alt="Logo Placeholder" align="left"></img>
      <h1 id="title-header">gTrade</h1>
      </div>
      <div className="main-content"> 
        
      </div>
      </header>
    </div>
  );
}

export default App;
