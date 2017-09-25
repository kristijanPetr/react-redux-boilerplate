import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Route, Router, browserHistory } from "react-router";
import ReduxPromise from "redux-promise";

import reducer from "./reducers/index";
// import { firebaseApp } from "./firebase";
import { fetchStories } from "./actions/index";

import App from "./components/App";
import "./index.css";

// const store = createStore(reducer, applyMiddleware(thunk));
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducer);
// store.dispatch(fetchStories());

// firebaseApp.auth().onAuthStateChanged(user => {
//   if (user) {
//     console.log("User logged in", user);
//     store.dispatch(logUser(user.email));
//     browserHistory.push("/app");
//     // browserHistory.replace("/login");
//   } else {
//     console.log("not logged in");
//     browserHistory.replace("/login");
//   }
// });

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
