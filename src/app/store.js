import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import CounterReducer from "./feature/Counter/reducer";
import thunk from "redux-thunk";

let rootReducers = combineReducers({
  counter: CounterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
