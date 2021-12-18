import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";

const configureStore = () => {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [];

  const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middlewares))
  );

  return store;
};

export default configureStore;
