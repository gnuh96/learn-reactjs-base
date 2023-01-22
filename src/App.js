import React, { useEffect } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import NotFound from './components/NotFound';
import productApi from './api/productApi';
import CounterFeature from './features/Counter2';

function App() {
    useEffect(() => {
        const fetchProducts = async () => {
            const params = {
                _limit: 10,
            };
            const productList = await productApi.getAll(params);
            console.log(productList);
        };

        fetchProducts();
    }, []);

    return (
        <div className="app">
            Header
            <p>
                <NavLink to="/todo-list" activeClassName="active-menu">
                    Todo
                </NavLink>
            </p>
            <p>
                <NavLink to="/album-list" activeClassName="active-menu">
                    Album
                </NavLink>
            </p>
            <Switch>
                <Redirect from="/home" to="/" />

                <Route path="/" component={CounterFeature} exact />
                <Route path="/todo-list" component={TodoFeature} />
                <Route path="/album-list" component={AlbumFeature} />

                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
