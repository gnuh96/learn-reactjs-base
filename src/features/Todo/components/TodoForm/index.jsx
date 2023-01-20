// Version 2
import PropTypes from 'prop-types';
import React from 'react';
// import './TodoForm.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputFeild from '../../../../components/form-controls/InputField';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const schema = yup
    .object({
      title: yup.string().required('Please enter title').min(5, 'Title is too short'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    // console.log('TODO FORM: ', values);
    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputFeild name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;

// Version 1
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import './TodoForm.scss';

// TodoForm.propTypes = {
//   onSubmit: PropTypes.func,
// };

// TodoForm.defaultProps = {
//   onSubmit: null,
// };

// function TodoForm(props) {
//   const { onSubmit } = props;

//   const [value, setValue] = useState('');

//   const handleValueChange = (e) => {
//     // console.log(e.target.value);
//     setValue(e.target.value);
//   };

//   function handleSubmit(e) {
//     e.preventDefault(); // block reload
//     if (!onSubmit) return;

//     const formValues = {
//       title: value,
//     };
//     onSubmit(formValues);
//     setValue(''); // reset form
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={value} onChange={handleValueChange} />
//     </form>
//   );
// }

// export default TodoForm;
