import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

    const handleTodoClick = (todo, idx) => {
        console.log(todo, idx);
        const newTodoList = [...todoList];

        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }

        newTodoList[idx] = newTodo;

        setTodoList(newTodoList);
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />

        </div>
    );
}

export default TodoFeature;