import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

ListPage.propTypes = {
};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            item: 'Eat',
            status: 'new',
        }, {
            id: 2,
            item: 'Sleep',
            status: 'completed',
        }, {
            id: 3,
            item: 'Code',
            status: 'new',
        }
    ];

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);
        // console.log(params);
        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || 'all');
    }, [location.search]);

    const handleTodoClick = (todo, idx) => {
        // console.log(todo, idx);
        const newTodoList = [...todoList];

        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }

        newTodoList[idx] = newTodo;

        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        // setFilterStatus('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const handleShowCompletedClick = () => {
        // setFilterStatus('completed');
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const handleShowNewClick = () => {
        // setFilterStatus('new');
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    function handleTodoFormSubmit(formValues) {
        // console.log('Form submit :', formValues);
        const newTodo = {
            id: todoList.length + 1,
            ...formValues,
            status: 'new',
        }
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    }

    const renderedTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status)
    // console.log(renderedTodoList);
    return (
        <div>
            <h3>Todo List</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;