import React from 'react';
import './App.scss';
import BetterClock from './components/BetterClock';
import Clock from './components/Clock';

function App() {
  return (
    <div className="app">
      <h1>Clock</h1>
      <Clock />
      <BetterClock />
    </div>
  );
}

export default App;
