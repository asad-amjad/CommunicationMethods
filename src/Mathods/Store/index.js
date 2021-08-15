import { createStore, combineReducers, applyMiddleware } from "redux";
import {recordReducer} from '../Store/reducer/Reducer'
import thunk from "redux-thunk";

const reducers = combineReducers({
  StoreData: recordReducer,
});
const middleware = [thunk];

const store = createStore(
  reducers,{},applyMiddleware(...middleware)
);

export default store;