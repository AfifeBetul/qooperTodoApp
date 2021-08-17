import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { addTodo, deleteTodo } from "../../resources/actions/actions";

import Form from "../../components/Form";
import FormItem from "../../components/FormItem";
import Span from "../../components/Span";
import Break from "../../components/Break";
import Tasks from "../../components/Tasks";

import TodosWrapper from "./index.style";

export default () => {
  const firestore = useFirestore();
  useFirestoreConnect("todos");

  const todos = useSelector((state) => state.firestore.ordered.todos);

  const dispatch = useDispatch();
  const createTodo = useCallback(
    (todo) => dispatch(addTodo({ firestore }, todo)),
    [firestore]
  );
  const removeTodo = useCallback(
    (id) => dispatch(deleteTodo({ firestore }, id)),
    [firestore]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = e.target.elements["task"].value;
    if (task.trim() === "") return;
    createTodo({ title: task });
    e.target.reset();
  };

  const handleDelete = (id) => {
    removeTodo(id);
  };

  return (
    <TodosWrapper>
      <Form onSubmit={handleSubmit}>
        <FormItem
          inputProps={{
            name: "task",
            placeholder: "Type a task and press Enter to add",
          }}
        />
      </Form>
      <Span type="h1">Tasks</Span>
      {todos?.length > 0 ? (
        <Tasks todos={todos} onDelete={handleDelete} />
      ) : (
        <Span className="text01">
          :(
          <Break />
          There is no task yet!
        </Span>
      )}
    </TodosWrapper>
  );
};
