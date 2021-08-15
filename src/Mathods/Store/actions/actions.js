import {UPDATE_DATA} from "../constants/constants";

export const updateData = (data) => async (dispatch) => {
  dispatch({ type: UPDATE_DATA, payload: data });
};
