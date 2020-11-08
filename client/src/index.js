import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App.jsx';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CookiesProvider } from "react-cookie";
import { Provider as StoreProvider } from "react-redux";
import { createStore } from "redux";
import myReducer from "./Reducers/index.jsx";

const store = createStore(
  myReducer,
);

ReactDOM.render(
    <StoreProvider store={store}>
      <CookiesProvider>
          <App />
        </CookiesProvider>
    </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
