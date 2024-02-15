import { createStore } from "redux";
import reducers from "./Reducers/CombineReducers";
// import { composeWithDevTools } from "redux-devtools-extension";

const myStore = createStore(reducers)


export default myStore