import React from "react";
import TaskItem from "../TaskItem";

import TasksWrapper from "./index.style";

const Tasks = ({ todos, onDelete, ...props }) => {
  return (
    <TasksWrapper {...props}>
      {todos.map((todo) => (
        <TaskItem
          key={todo.id}
          taskId={todo.id}
          task={todo.title}
          onDelete={onDelete}
        />
      ))}
    </TasksWrapper>
  );
};

export default Tasks;
