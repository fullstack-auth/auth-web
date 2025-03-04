
import React from 'react';
import { Controller } from 'react-hook-form';
import { DatePicker } from 'antd';

type InputDateProps = {
    placeholder: string;
    name: string;
}

export const InputDate = ((props: InputDateProps) => {
    const { name, placeholder} = props;
    return (
      <Controller
        name={name}
        render={({ field }) => (
          <DatePicker
          type='text'
          {...field}
          placeholder={placeholder}
          style={{ width: '100%' }}
          />
        )}
      />
    )
  });
