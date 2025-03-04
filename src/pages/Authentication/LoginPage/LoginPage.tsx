import React from 'react';
import { Form } from '../../../components/forms/Form';
import { Button } from 'antd';
import { InputText } from '../../../components/forms/inputs/InputText';
import { useAuthApi } from "../../../hooks/useAuthApi";
import { useNavigate } from 'react-router-dom';

interface LoginData {
  username: string;
  password: string;
}

const LoginPage = () => {
    const navigate = useNavigate();
    const { authenticateUser } = useAuthApi();
    const onSubmitHandler = async (data: LoginData) => { //Ensure types!!!
        console.log('Request data:', data);
        try {
          await authenticateUser(data);
          navigate('/home');
        } catch (error) { console.error(error) }
      }
      const redirectToRegisterPage = () => {navigate('/register')}
      
  return (
    <Form defaultValues={{ username: '', password: '' }} onSubmit={onSubmitHandler} title="Login">
      <InputText name="username" placeholder="Username" />
      <InputText name="password" placeholder="Password" />
      <Button type="primary" htmlType="submit">Login</Button>
      <Button onClick={redirectToRegisterPage}>Register</Button>
    </Form>
  );
};

export default LoginPage;