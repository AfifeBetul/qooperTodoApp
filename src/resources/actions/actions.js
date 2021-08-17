import { ERROR, TODO_ADDED, TODO_DELETED } from "../actionTypes";

export const addTodo = ({ firestore }, todo) => {
  return (dispatch) => {
    firestore
      .collection("todos")
      .add(todo)
      .then(() => {
        dispatch({ type: TODO_ADDED, todo });
      })
      .catch((err) => {
        dispatch({ type: ERROR, err });
      });
  };
};
export const deleteTodo = ({ firestore }, id) => {
  return (dispatch) => {
    firestore
      .collection("todos")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: TODO_DELETED });
      })
      .catch((err) => {
        dispatch({ type: ERROR, err });
      });
  };
};
