import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas';
import rootReducer from './reducers';
import history from 'utils/history';

const sagaMiddleWare = createSagaMiddleware({
  context: { history: history },
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

export default store;
