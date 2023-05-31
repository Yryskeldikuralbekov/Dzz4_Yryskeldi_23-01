import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import counterReducer from "./counterReducer";
import todosReducer from "./todosReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todos: todosReducer,
  counter: counterReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// window.__REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION__()
