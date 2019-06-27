// Libraries
import axios from "axios";
// Actions
import { FETCH_USER } from "./types";

//Old way to fetch the user
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

// export const fetchUser = () => async dispatch => {
//   dispatch({
//     type: FETCH_USER,
//     payload: await axios.get("/api/current_user")
//   });
// };
