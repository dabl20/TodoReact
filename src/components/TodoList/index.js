import React from "react";
import s from "./style.module.css";
import TodoListItem from "../TodoListItem";

const TodoList = ({ todos }) => {
  const style = {
    fontSize: "18px",
  };

  const liElements = todos.map((el) => {
    const {id, ...elProps} = el

    return (
      <li key={id} className={s.li}>
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
