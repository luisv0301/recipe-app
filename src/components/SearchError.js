import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { RecipesContext } from "../contexts/RecipesContextProvider";
import "./searchError.scss";

export default function SearchError() {
  const {
    state: { isFetching },
  } = useContext(RecipesContext);

  return (
    <>
      {isFetching && <Redirect to="/cards" />}

      <div className="search-error">
        <h2>
          An error have ocurred when trying to get the results, try to search
          for something diffrerent.
        </h2>
      </div>
    </>
  );
}
