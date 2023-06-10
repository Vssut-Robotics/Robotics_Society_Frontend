import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  composeWithDevTools,
  createwithDevTools,
} from "redux-devtools-extension";
import { memeberListReducers } from "./reducers/MemberReducers";
import { projectListReducers } from "./reducers/ProjectReducers";

const reducer = combineReducers({
  memberlist: memeberListReducers,
  projectlist: projectListReducers,
});

const initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
