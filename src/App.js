import React from 'react';
import './App.scss';
import BetterClock from './components/BetterClock';
import Clock from './components/Clock';
import MagicBox from './components/MagicBox';

function App() {
  return (
    <div className="app">
      <h1>Magic Box</h1>
      <MagicBox />
    </div>
  );
}

export default App;
