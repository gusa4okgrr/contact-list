import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'

import rootReducer from "./redux/reducers";
import mySaga from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(mySaga);


  return store;
}