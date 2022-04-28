import React, { useContext, useState } from "react";

const MyContext = React.createContext(null);

export const useCounter = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("Needs to be in Context");
  }

  return context;
};

export const CounterProvider = ({ children }) => {
  // State
  const [count, setCount] = useState(0);

  // Actions: Methods for updating state
  const inc = useCallback(() => setCount((v) => v + 1), []);

  return (
    <MyContext.Provider
      value={{
        count,
        inc,
        // Clothing,
        // addClothing,
        // removeClothing
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
