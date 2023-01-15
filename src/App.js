import React from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="app">
      <TodoFeature />
      <ColorBox />
    </div>
  );
}

export default App;
