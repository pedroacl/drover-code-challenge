import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import {
  subscriptionStartDaysOptions,
  distanceOptions,
  vehicleMakeOptions,
  transmissionOptions,
  fuelOptions,
  yearOptions,
} from './selectFieldsOptions';
import InputField from './InputField';
import SelectField from './SelectField';

const style = {
  submitButton: {
    backgroundColor: '#50ff7d',
  },
};

const SearchForm = (props) => {
  const { handleSubmit, submitForm } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          name="location"
          className="form-control"
          label="Location"
          component={InputField}
          type="text"
        />
      </div>

      <div className="form-group">
        <Field
          name="subscription_start_days"
          options={subscriptionStartDaysOptions}
          label="Subscription starts within the"
          type="select"
          component={SelectField}
        />
      </div>

      <div className="form-group">
        <Field
          name="max_distance"
          className="form-control"
          label="Distance (radius in miles)"
          options={distanceOptions}
          component={SelectField}
          onChange={handleSubmit}
        />
      </div>

      <div className="form-group">
        <Field
          name="vehicle_make"
          className="form-control"
          label="Vehicle Make"
          options={vehicleMakeOptions}
          component={SelectField}
          onChange={handleSubmit}
        />
      </div>

      <div className="form-group">
        <Field
          name="transmission"
          className="form-control"
          label="Gearbox"
          options={transmissionOptions}
          component={SelectField}
          onChange={handleSubmit}
        />
      </div>

      <div className="form-group">
        <Field
          name="year"
          className="form-control"
          label="Year"
          options={yearOptions}
          component={SelectField}
          onChange={handleSubmit}
        />
      </div>

      <div className="form-group">
        <Field
          name="fuel"
          className="form-control"
          label="Fuel Type"
          options={fuelOptions}
          component={SelectField}
          onChange={handleSubmit}
        />
      </div>

      <div className="form-group">
        <Field
          name="vehicle_type"
          className="form-control"
          label="Car Type"
          options={vehicleMakeOptions}
          component={SelectField}
          onChange={handleSubmit}
        />
      </div>

      <input className="btn btn-outline-dark" type="submit" style={style.submitButton} />
    </form>
  );
};

export default reduxForm({
  form: 'carsSearchForm',
  // onSubmit,
})(SearchForm);
