import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from '../redux/rootReducers';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const middleWare = [thunkMiddleware];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancer = [composeEnhancers(applyMiddleware(...middleWare))];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleWare)),
);

// const store = createStore(
//   rootReducer,
//   undefined,
//   composeWithDevTools(applyMiddleware(thunkMiddleware)),
// );

export default store;
