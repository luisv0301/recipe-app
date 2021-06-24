export const RECIPES_ACTIONS = {
  FETCHING_DATA: "FETCHING_DATA",
  FETCHED_DATA: "FETCHED_DATA",
  FETCHING_ERROR: "FETCHING_ERROR",
};

const recipeReducer = (state, action) => {
  switch (action.type) {
    case RECIPES_ACTIONS.FETCHING_DATA:
      return { ...state, isFetching: true, isFetchingError: false };
    case RECIPES_ACTIONS.FETCHED_DATA:
      return { ...state, data: action.payload, isFetching: false };
    case RECIPES_ACTIONS.FETCHING_ERROR:
      return { ...state, isFetching: false, isFetchingError: true };
    default:
      return state;
  }
};

export default recipeReducer;
