import React from 'react';
import { useForm, FormProvider, FieldValues, DefaultValues } from 'react-hook-form';
import { Space, Card } from 'antd';

export interface FormProps<T extends FieldValues> {
  defaultValues: DefaultValues<T>;
  children: React.ReactNode;
  onSubmit: (data: T) => void  | Promise<void>;
  title?: string;
  extra?: React.ReactNode;
}

export const Form = <T extends FieldValues>(props: FormProps<T>) => {
  const methods = useForm<T>({ defaultValues: props.defaultValues });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <Card title={props.title} extra={props.extra} style={{ width: "100%" }}>
        <form onSubmit={handleSubmit(props.onSubmit)}>
          <Space style={{ width: '100%' }} direction="vertical" size={15}>
            {props.children}
          </Space>
        </form>
      </Card>
    </FormProvider>
  );
};
