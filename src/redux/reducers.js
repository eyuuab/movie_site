import { UPDATE_CHOIES } from "./types";

const initialState = {
  choies: "tv/top_rated",
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHOIES:
      return {
        ...state,
        choies: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
