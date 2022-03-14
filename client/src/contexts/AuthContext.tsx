import axios, { AxiosResponse } from 'axios';
import React, { createContext, useState, ReactNode, useContext } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

export interface IAuthContext {
  user: any;
  login: any;
  logout: any;
  loggedIn: boolean;
  register: any;
  loading: any;
}

const InitialState = {
  login: () => {},
  logout: (): void => {},
  loggedIn: false,
  loading: false,
  register: () => {},
  user: {},
};

export const AuthContext = createContext<IAuthContext>(InitialState);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const register = async (
    email: string,
    password: string
  ): Promise<AxiosResponse> => {
    const { data } = await axios.post(API_URL + 'register', {
      email,
      password,
    });
    return data;
  };

  const login = async (
    email: string,
    password: string
  ): Promise<AxiosResponse> => {
    setLoading(true);
    const { data } = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    localStorage.setItem('user', JSON.stringify(data));
    console.log('doing something');
    setLoggedIn(true);
    return data;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
  };

  const value = {
    user,
    login,
    logout,
    loading,
    loggedIn,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
