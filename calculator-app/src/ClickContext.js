import React from 'react';

export const ClickContext = React.createContext();

export const useClickContext = () => {
  const context = React.useContext(ClickContext);
  if (!context) {
    throw new Error('useClickContext must be used within the ClickContextProvider');
  }
  return context;
};
