import { makeRequest } from '../api/utils';
import { LoginDto, RegisterDto } from './useAuthApi.dtos';

type TUser = {
  username: string;
  password: string;
}

type TUserData = {
  username: string;
  password: string;
  mail: string;
  birthDate: string;
  gender: string;
  phoneNumber: string;
  adress: string;
  country: string;
}

export const useAuthApi = () => {
  return {
    authenticateUser: async (data: TUser): Promise<LoginDto> => {
      const url = `${import.meta.env.VITE_API_URL}/auth/login`;
      const res = await makeRequest(url, 'POST', {}, data);
      
      if (res && res.access_token) {localStorage.setItem('access_token', res.access_token)}
      return res;
    },
    registerUser: async (data: TUserData): Promise<RegisterDto> => {
      const url = `${import.meta.env.VITE_API_URL}/auth/register`;
      const res = await makeRequest(url, 'POST', {}, data)
      
      if (res && res.access_token) {localStorage.setItem('access_token', res.access_token)}
      return res
    }
  };
};
