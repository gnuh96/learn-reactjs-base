import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            item: 'Eat',
            status: 'new',
        }, {
            id: 2,
            item: 'Sleep',
            status: 'new',
        }, {
            id: 3,
            item: 'Code',
            status: 'new',
        }
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState('all');

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
        setFilterStatus('all')
    }

    const handleShowCompletedClick = () => {
        setFilterStatus('completed')
    }

    const handleShowNewClick = () => {
        setFilterStatus('new')
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

export default TodoFeature;