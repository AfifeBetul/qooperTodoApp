import React from "react";
import { Provider } from "react-redux";
import firebase from "./configs/firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { store } from "./resources/store";
import Block from "./components/Block";
import App from "./containers/App";

import "./assets/styles/styles.css";

const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Block>
        <App />
      </Block>
    </ReactReduxFirebaseProvider>
  </Provider>
);
