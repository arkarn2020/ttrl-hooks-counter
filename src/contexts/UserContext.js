import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState('john');

  const toggleUser = () => {
    const newUser = 'doe';
    if (user !== 'john') setUser('john');
    else setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, toggleUser }}>
      {children}
    </UserContext.Provider>
  );
};
