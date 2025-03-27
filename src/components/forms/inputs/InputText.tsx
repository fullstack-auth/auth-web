
import { Controller } from 'react-hook-form';
import { Input } from 'antd';

type InputTextProps = {
    placeholder: string;
    name: string;
}

export const InputText = ((props: InputTextProps) => {
    const { name, placeholder} = props;
    return (
      <Controller
        name={name}
        render={({ field }) => (
          <Input
          type='text'
          {...field}
          placeholder={placeholder}
          style={{ width: '100%' }}
          />
        )}
      />
    )
  });
