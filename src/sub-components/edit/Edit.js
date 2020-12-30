import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import styles from './Edit.scss';
import TextField from '@material-ui/core/TextField';

export default function Edit(props) {
  const { register, handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      {Object.entries(props.fields).map(([property, value]) => {
        return (
          <div className="input-field">
            <Controller
              as={TextField}
              label={property}
              name={property}
              control={control}
              defaultValue={value}
            />
          </div>
        );
      })}

      <input type="submit" />
      <button onClick={props.onCancel}>Cancel</button>
    </form>
  );
}
