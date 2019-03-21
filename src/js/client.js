import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, HashRouter} from "react-router-dom";

import Main from "./Main";
import rootSaga from './components/chart/saga'

import { Provider } from 'react-redux'

import createSagaMiddleware from 'redux-saga'

import {reducer as barReducer} from './components/chart/bar/reducer.js'
import {reducer as xyReducer} from './components/chart/xy/reducer.js'
import {reducer as pieReducer} from './components/chart/pie/reducer.js'

import { createStore, combineReducers , applyMiddleware, compose} from 'redux'
import Immutable from "immutable";


// export function globalReducer(state = {sessionToken: "fasdfwr34raqsd"}, action) {
//
//   let imState = Immutable.fromJS(state);
//
//   if (!action)
//     return imState.toJS();
//
//   switch (action.type) {
//
//     case "SET_COOKIE":
//
//       // imState = imState.setIn(["sessionToken"], "fasdfwr34raqsd")
//       // console.info("set cookie")
//
//       debugger;
//       break;
//   }
//
//   return imState.toJS();
// }
//



let combinedReducers = combineReducers({
  // global: globalReducer,
  xy: xyReducer,
  pie: pieReducer,
  bar: barReducer
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);


// store.subscribe(()=>{
//
//   if (store.getState().global.sessionToken) {
//     store.dispatch({type:"SET_COOKIE"})
//   }
//
//   console.info("this is something " + JSON.stringify(store.getState()))
//
//
// })
//setup saga middleware
sagaMiddleware.run(rootSaga);

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Main/>
    </HashRouter>
  </Provider>,
app);
