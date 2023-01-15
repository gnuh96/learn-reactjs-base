import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TodoForm.scss';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    const handleValueChange = (e) => {
        // console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault(); // block reload
        if (!onSubmit) return;

        const formValues = {
            item: value,
        };
        onSubmit(formValues);
        setValue(''); // reset form
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValueChange} />
        </form>
    );
}

export default TodoForm;