import RecipesCard from "./components/RecipesCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipesContextProvider from "./contexts/RecipesContextProvider";
import Home from "./layout/Home";
import Navbar from "./layout/Navbar";
import Card from "./components/Card";
import Page404 from "./components/Page404";
import SearchError from "./components/SearchError";

function App() {
  return (
    <div className="main-container">
      <RecipesContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cards" component={RecipesCard} />
            <Route path="/card/:label" component={Card} />
            <Route path="/searchError" component={SearchError} />
            <Route path="*" component={Page404} />
          </Switch>
        </Router>
      </RecipesContextProvider>
    </div>
  );
}

export default App;
