import rootReducer from "../reducers/RootReducer.js";
import { createStore, applyMiddleware } from "redux";

const store = () => {
    return createStore (
        rootReducer,
    )
}


export default store;