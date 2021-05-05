import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './Test';
import reducer from "./reducers/reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const store = createStore(reducer,applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Test />
  </Provider>,
  document.getElementById('root')
);
