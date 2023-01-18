import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="app">
      Header
      <p><NavLink to="/todo-list" activeClassName="active-menu">Todo</NavLink></p>
      <p><NavLink to="/album-list" activeClassName="active-menu">Album</NavLink></p>
      <Switch>
        <Redirect from='/home' to="/" />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todo-list" component={TodoFeature} />
        <Route path="/album-list" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
