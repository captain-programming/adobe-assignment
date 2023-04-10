import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./user/user.reducer";
import { postReducer } from "./post/post.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));