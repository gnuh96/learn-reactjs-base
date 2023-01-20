import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

InputFeild.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputFeild(props) {
  const { form, name, label, disabled } = props;
  const {
    formState: { errors, touchedFields },
  } = form;
  const hasError = errors[name] && touchedFields[name];

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          fullWidth
          {...field}
          variant="standard"
          label={label}
          disabled={disabled}
          error={!!hasError}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
}

export default InputFeild;
