import { makeRequest } from '../api/utils';
import { LoginDto } from './useAuthApi.dtos';
type TUser = {
  username: string;
  password: string;
}

export const useAuthApi = () => {

  return {
      authenticateUser: async (data: TUser): Promise<LoginDto> => {
        const url = `${import.meta.env.VITE_API_URL}/auth/login`;
        return makeRequest(url, 'POST', {}, data);
      }
  }
}
