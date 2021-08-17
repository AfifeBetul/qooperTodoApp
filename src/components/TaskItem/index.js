import React from "react";
import Block from "../Block";
import Button from "../Button";

import TaskItemWrapper from "./index.style";

const TaskItem = ({ taskId, task, onDelete, ...props }) => {
  const handleDelete = () => {
    onDelete(taskId);
  };
  return (
    <TaskItemWrapper className="taskItem" {...props}>
      <Block className="flex-fill">{task}</Block>
      <Button type="icon" onClick={handleDelete}>
        X
      </Button>
    </TaskItemWrapper>
  );
};

export default TaskItem;
