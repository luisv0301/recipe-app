import React, { useContext } from "react";

import { Redirect } from "react-router";
import "./Home.scss";
import { RecipesContext } from "../contexts/RecipesContextProvider";

export default function Home() {
  const {
    state: { isFetching },
  } = useContext(RecipesContext);

  return (
    <>
      {isFetching && <Redirect to="/cards" />}
      <header className="header">
        <div className="header-description">
          <h1>The most delicious recipes, in just one place.</h1>
          <p>
            Here you'll be able to find some of the best recipes out there.
            Start by searching
          </p>
        </div>
      </header>
    </>
  );
}
