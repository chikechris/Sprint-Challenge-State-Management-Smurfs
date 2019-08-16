import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE
} from "../actions";

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
