import { TODO_ADDED, TODO_DELETED, ERROR } from "../actionTypes";

const initState = {};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case TODO_ADDED:
      console.log(action.todo + " todo added succesfully");
      return state;
    case TODO_DELETED:
      console.log("todo deleted succesfully");
      return state;
    case ERROR:
      console.log("todo error : " + action.err);
      return state;
    default:
      return state;
  }
};

export default todoReducer;
