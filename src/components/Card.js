import React, { useContext } from "react";
import "../components/recipeInfo.scss";
import { Redirect, useParams } from "react-router";
import { RecipesContext } from "../contexts/RecipesContextProvider";
import icon from "../assets/dish.svg";

export default function Card() {
  const { label } = useParams();
  const {
    state: { data, isFetching },
  } = useContext(RecipesContext);

  const mainRecipe = data.filter((item) => item.recipe.label === label);

  return (
    <>
      {isFetching && <Redirect to="/cards" />}
      {mainRecipe.map(
        (
          {
            recipe: {
              ingredientLines,
              cuisineType,
              label,
              image,
              totalWeight,
              totalNutrients,
              mealType,
              dietLabels,
            },
          },
          index
        ) => {
          return (
            <div className="recipe-info" key={index}>
              <img src={image} alt={label} />
              <h3>{label}</h3>
              <div className="recipe-info-subtittle">
                <img src={icon} alt="" />
                <h4> {cuisineType?.[0]} </h4>
              </div>
              <div className="recipe-info-labels">
                <p>{mealType}</p> <p>{dietLabels}</p>{" "}
                <p>{totalWeight.toFixed(2)}gr</p>
              </div>
              <input type="checkbox" id="nutrients" />
              <div className="recipe-info-description">
                <label htmlFor="nutrients">
                  <h4 className="recipe-info-label">Nutrients</h4>
                </label>
                <ul className="recipe-info-list">
                  {Object.entries(totalNutrients).map((c) => {
                    const { label, quantity, unit } = c[1];
                    return (
                      <>
                        <li className="recipe-info-item recipe-info-item-nutrients">
                          <p>{label}</p>
                          <p>
                            {quantity}
                            {unit}
                          </p>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>

              <input type="checkbox" id="ingredients" />
              <div className="recipe-info-description">
                <label htmlFor="ingredients">
                  <h4 className="recipe-info-label">Ingredients</h4>
                </label>
                <ul className="recipe-info-list">
                  {ingredientLines.map((ingredient) => (
                    <li className="recipe-info-item">{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }
      )}
    </>
  );
}
