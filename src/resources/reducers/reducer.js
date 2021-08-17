import { combineReducers } from "redux";
import { firebaseStateReducer as firebase } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  firebase,
  firestore: firestoreReducer,
});

export default rootReducer;
