import React, { createContext, useReducer } from "react";

import recipeReducer from "../reducer/recipeReducer.js";

export const RecipesContext = createContext();

const initialState = {
  data: [],
  isFetching: false,
  isFetchingError: false,
};

export default function RecipesProviderProvider({ children }) {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  return (
    <RecipesContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipesContext.Provider>
  );
}
