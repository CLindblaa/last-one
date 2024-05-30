import React, { createContext, useContext, useReducer } from "react";

const SearchesContext = createContext();

const searchesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SEARCH":
      return [action.payload, ...state];
    default:
      return state;
  }
};

export const SearchesProvider = ({ children }) => {
  const [recentSearches, dispatch] = useReducer(searchesReducer, []);

  const addSearch = (search) => {
    dispatch({ type: "ADD_SEARCH", payload: search });
  };

  return (
    <SearchesContext.Provider value={{ recentSearches, addSearch }}>
      {children}
    </SearchesContext.Provider>
  );
};

export const useSearches = () => useContext(SearchesContext);
