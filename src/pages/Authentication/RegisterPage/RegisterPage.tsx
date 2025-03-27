import React from 'react';
import { Form } from '../../../components/forms/Form';
import { Button } from 'antd';
import { InputText } from '../../../components/forms/inputs/InputText';
import { InputDate } from '../../../components/forms/inputs/InputDate';
import { useNavigate } from 'react-router-dom';
import { useAuthApi } from "../../../hooks/useAuthApi"

interface RegisterData {
  username: string;
  password: string;
  mail: string;
  birthDate: string;
  gender: string;
  phoneNumber: string;
  adress: string;
  country: string;
}

const RegisterPage = () => {
  const navigate = useNavigate();
  const { registerUser } = useAuthApi();
  const onSubmitHandler = async (data: RegisterData) => {
    try {
      await registerUser(data);
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  const redirectToLoginPage = () => { navigate('/login')};

  return (
    <>
      <Form
        defaultValues={{
          username: '',
          password: '',
          mail: '',
          birthDate: '',
          gender: '',
          phoneNumber: '',
          adress: '',
          country: ''
        }}
        onSubmit={onSubmitHandler}
        title="Register"
      >
        <InputText name="username" placeholder="Username" />
        <InputText name="password" placeholder="Password" />
        <InputText name="mail" placeholder="E-mail" />
        <InputDate name="birthDate" placeholder="Birth Date" />
        <InputText name="gender" placeholder="Gender" />
        <InputText name="phoneNumber" placeholder="Phone Number" />
        <InputText name="adress" placeholder="Address" />
        <InputText name="country" placeholder="Country" />
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        <Button onClick={redirectToLoginPage}>
          Login
        </Button>
      </Form>
    </>
  );
};

export default RegisterPage;
