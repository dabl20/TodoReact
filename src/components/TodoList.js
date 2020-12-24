import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  const style = {
    fontSize: "18px",
  };

  const liElements = todos.map((el) => {
    const {id, ...elProps} = el

    return (
      <li key={id} style={style}>
        <TodoListItem {...elProps} />
      </li>
    );
  });

  return (
    <div>
      <ul>{liElements}</ul>
    </div>
  );
};

export default TodoList;
