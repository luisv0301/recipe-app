import React from "react";
import "./page404.scss";
import { Link } from "react-router-dom";
import scene from "../assets/4scene.svg";

export default function Page404() {
  return (
    <div className="page404">
      <div className="page404-description">
        <h2>Sorry, We haven't be able to find the page you are looking for</h2>
        <p>
          try going back to <Link to="/">Home</Link>{" "}
        </p>
      </div>
      <div>
        <img src={scene} alt="404 error" />
      </div>
    </div>
  );
}
