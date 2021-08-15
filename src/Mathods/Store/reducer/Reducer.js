import { UPDATE_DATA } from '../constants/constants';

const initialState = {
  data:"Default from Redux"
};

export const recordReducer = function (state= initialState, action) {
  switch (action.type) {
    case UPDATE_DATA:
      return {...state, data: action.payload};
    default:
      return state;
  }
};



