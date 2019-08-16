import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  POST_SMURFS_START,
  POST_SMURFS_SUCCESS,
  POST_SMURFS_FAILURE
} from "../actions";

const inititalState = {
  smurfs: [],
  success: "",
  error: ""
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        success: "",
        error: ""
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,

        smurfs: action.payload,
        success: "",
        error: ""
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        success: state.success,
        error: "Cant load smurfs!!!!"
      };
    case POST_SMURFS_START:
      return {
        ...state,
        success: "",
        error: ""
      };
    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        success: action.payload,
        error: ""
      };
    case POST_SMURFS_FAILURE:
      return {
        ...state,
        success: "",
        error: "Cant post smurfs!!!!"
      };

    default:
      return state;
  }
};

export default reducer;
