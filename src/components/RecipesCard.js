import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "../components/recipesCard.scss";
import { RecipesContext } from "../contexts/RecipesContextProvider";
import MainSkeleton from "./MainSkeleton";

export default function RecipesCard() {
  const {
    state: { data, isFetching, isFetchingError },
  } = useContext(RecipesContext);

  return (
    <>
      {isFetchingError && <Redirect to="/searchError" />}

      <div className="cards-container">
        {isFetching && <MainSkeleton />}

        {data &&
          data.map(({ recipe: { label, image } }, index) => {
            return (
              <div
                className={`card ${isFetching ? "card-is-no-visible" : null}`}
                key={index}
              >
                <img src={image} alt={label} className="card-img" />
                <h3 className="card-tittle">{label}</h3>
                <Link to={`/card/${label}`} className="card-link">
                  More info
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}
