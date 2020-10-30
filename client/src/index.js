import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App.jsx';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CookiesProvider } from "react-cookie";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider as StoreProvider } from "react-redux";
import { createStore } from "redux";
import myReducer from "./Reducers/index.jsx";

const client = new ApolloClient({
    uri: "https://countries-274616.ew.r.appspot.com",
    // request: operation => {
    //     operation.setContext({
    //         headers: {
    //             authorization: `Bearer your-personal-access-token`
    //         },
    //     });
    // }
});
const store = createStore(
  myReducer,
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <StoreProvider store={store}>
      <CookiesProvider>
          <App />
        </CookiesProvider>
    </StoreProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
