import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START ";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS ";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE ";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_SMURFS_FAILURE });
    });
};

export const POST_SMURFS_START = "POST_CHARACTER_START";
export const POST_SMURFS_SUCCESS = "POST_CHARACTER_SUCCESS";
export const POST_SMURFS_FAILURE = "POST_CHARACTER_FAILURE";

export const addCharacter = value => dispatch => {
  dispatch({ type: POST_SMURFS_START });

  axios
    .post("http://localhost:3333/smurfs", value)
    .then(res => {
      dispatch({
        type: POST_SMURFS_SUCCESS,
        payload: `A smurf  has been added to the group`
      });
    })
    .catch(err => {
      dispatch({ type: POST_SMURFS_FAILURE, payload: `Can't post Smurf` });
    });
};
