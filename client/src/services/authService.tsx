import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:8000/api/auth/';

const register = (email: string, password: string): Promise<AxiosResponse> => {
  return axios.post(API_URL + 'signup', {
    email,
    password,
  });
};

const login = (email: string, password: string): Promise<AxiosResponse> => {
  return axios
    .post(API_URL + 'signin', {
      email,
      password,
    })
    .then(response => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
