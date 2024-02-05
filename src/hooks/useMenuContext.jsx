import React, { createContext, useContext, useState } from "react";

const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [buttonActive, setButtonActive] = useState(false);

  const toggleButton = () => {
    setButtonActive(!buttonActive);
  };

  return (
    <ButtonContext.Provider value={{ buttonActive, toggleButton }}>
      {children}
    </ButtonContext.Provider>
  );
};

// Custom hook para acessar o contexto
export const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("useButtonContext deve ser usado dentro de um ButtonProvider");
  }
  return context;
};
