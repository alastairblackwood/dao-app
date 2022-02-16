import React, { useState, ReactNode, createContext } from 'react';
// import Login from '../../pages/Login';

// /**
//  * FOR REFERENCE ONLY, NOT PART OF IMPLEMENTATION.
//  */
// export interface UserContextProps {
//   notLoading();
//   loading();
//   isLoggedIn: boolean;
//   userEmail: string | undefined;
//   login: () => void;
// }

// const InitialState = {
//   userEmail: '',
//   isLoggedIn: false,
//   login: () => {},
// };

// export const UserContext = createContext<UserContextProps>(InitialState);

// export const UserContextProvider = ({ children }: { children: ReactNode }) => {
//   const [userEmail, setEmail] = useState<string | undefined>();

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = (): void => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <UserContext.Provider value={{ userEmail, isLoggedIn, login }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
