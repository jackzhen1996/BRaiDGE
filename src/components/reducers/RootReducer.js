import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer.js";

const rootReducer = combineReducers({
    session: sessionReducer
});

  export default rootReducer;