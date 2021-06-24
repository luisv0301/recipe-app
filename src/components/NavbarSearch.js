import React, { useContext, useEffect, useState } from "react";
import "../components/navbarSearch.scss";
import { RecipesContext } from "../contexts/RecipesContextProvider.js";
import { RECIPES_ACTIONS } from "../reducer/recipeReducer";

import useDebounce from "../hooks/useDebounce.js";

export default function NavbarSearch() {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useContext(RecipesContext);
  const { FETCHING_DATA, FETCHED_DATA, FETCHING_ERROR } = RECIPES_ACTIONS;

  const debouncedValue = useDebounce(inputValue, 500);

  // API PARAMETERS
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;

  const fetchRecipes = async () => {
    try {
      dispatch({ type: FETCHING_DATA });

      const data = await fetch(
        `https://api.edamam.com/search?q=${debouncedValue}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const { hits } = await data.json();
      if (hits.length > 0) {
        dispatch({ type: FETCHED_DATA, payload: hits });
        setInputValue("");
      } else {
        dispatch({ type: FETCHING_ERROR });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCHING_ERROR });
    }
  };

  useEffect(() => {
    if (debouncedValue) {
      fetchRecipes();
    }
  }, [debouncedValue]);

  return (
    <>
      <form className="search">
        <input
          type="search"
          placeholder="search for a recipe"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="search-input"
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </>
  );
}
