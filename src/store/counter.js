import React, { useContext, useState, useCallback } from "react";
import addClothingItem from "../Components/Data"
import { removeClothingItem } from "../Components/Data"
import Clothing from "../Components/Clothing"
import ItemList from "../Components/ItemList"

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

  // console.log(count);

  //
  const [user, setUser] = React.useState({ name: 'Felix' });
  const handleInput = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  return (
    <MyContext.Provider
      value={{
        count,
        inc,
        // Clothing,
        Clothing,
        // addClothing,
        addClothingItem,
        // removeClothing
        removeClothingItem,
        ItemList
      }}
    >
      {/* <input onChange={handleInput} value={user.name} /> */}
      {/* <ItemList/>  */} {/*this is the one that actually works*/}
      {children}
    </MyContext.Provider>
  );
};

// const Child = ({ user }) => (
//   <>
//      <h2>Child</h2>
//      <h1>{user.name}</h1>
//   </>
// );