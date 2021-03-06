import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import HourPicker from './HourPicker';

const HourField = ({
  disabled,
  label,
  name,
  required,
  helperText,
  hide,
  options,
  className,
}) => {
  function validate(checked) {
    if (required && !checked) {
      return 'required';
    }
    return null;
  }

  return (
    <Field
      name={name}
      type='date'
      render={({ input, meta }) => (
        <HourPicker
          onChange={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
          label={label}
          disabled={disabled}
          showError={meta.touched && meta.error !== undefined}
          error={meta.error}
          helperText={helperText}
          hide={hide}
          options={options}
          className={className}
        />
      )}
      validate={!disabled ? validate : undefined}
    />
  );
};

HourField.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  hide: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

HourField.defaultProps = {
  disabled: false,
  label: '',
  required: false,
  helperText: undefined,
  hide: false,
  options: [],
  className: '',
};

export default HourField;
