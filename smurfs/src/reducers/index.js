import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE
} from "../actions";

const inititalState = {
  smurfs: [],
  isLoading: false,
  error: ""
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "Cant load smurfs!!!!"
      };
    default:
      return state;
  }
};

export default reducer;
