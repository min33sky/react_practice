import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import friendReducer from '../friend/state';
import timelineReducer from '../timeline/state';
import timelineSaga from '../timeline/state/saga';

const reducer = combineReducers({
  friend: friendReducer,
  timeline: timelineReducer,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

function* rootSaga() {
  yield all([timelineSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;
