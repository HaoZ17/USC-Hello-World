import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './Test';
import reducer from "./reducers/reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import App from './App';
import Card from "./components/Card"

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Test />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
