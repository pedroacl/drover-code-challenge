import React from 'react';
import { PropTypes } from 'prop-types';

const renderOption = (props) => {
  const { value, label } = props;

  return (
    <option key={value} value={value}>
      {label}
    </option>
  );
};

renderOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const renderSelectField = ({ name, input, label, type, touched, error, options }) => (
  <div>
    <label className="font-weight-bold">{label}</label>
    <div>
      <select {...input} placeholder={label} type={type} className="form-control">
        {(options).map(option => renderOption(option))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

renderSelectField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.string,
};

export default renderSelectField;
