import React from "react";

const TodoListItem = ({ text, important = false }) => {
  const style = {
    color: important ? "blue" : "black",
  };
  return <span style={style}>{text}</span>;
};

export default TodoListItem;
