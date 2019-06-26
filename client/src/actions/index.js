// Libraries
import axios from "axios";
// Actions
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  dispatch({
    type: FETCH_USER,
    payload: await axios.get("/api/current_user")
  });
};
